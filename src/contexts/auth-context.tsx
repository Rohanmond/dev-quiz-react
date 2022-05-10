import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { AuthContextType, LayoutPropType, UserType } from '../types';
import { toastHandler, ToastType } from '../utils/utils';
import { useLoader } from './loader-context';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: LayoutPropType) => {
  const localStorageToken = JSON.parse(
    localStorage.getItem('loginItems') || '{}'
  );
  const [token, setToken] = useState<string>(localStorageToken?.token || '');
  const [userId, setUserId] = useState<string>(localStorageToken?.userId || '');
  const [user, setUser] = useState<UserType>({
    name: '',
    email: '',
    score: [],
    uid: '',
  });
  const { setShowLoader } = useLoader();

  useEffect(() => {
    if (token && userId) {
      (async () => {
        const q = query(collection(db, 'users'), where('uid', '==', userId));
        onSnapshot(q, (data) => {
          setUser(data.docs[0].data() as UserType);
        });
      })();
    }
  }, [token]);

  const loginHandler = async (email: string, password: string) => {
    setShowLoader(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user: any = res.user;

      toastHandler(ToastType.Success, 'Successfully signed In');
      setToken(user?.accessToken);
      setUserId(user?.uid);
      localStorage.setItem(
        'loginItems',
        JSON.stringify({ token: user?.accessToken, userId: user?.uid })
      );
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    } finally {
      setShowLoader(false);
    }
  };

  const signupHandler = async (
    name: string,
    email: string,
    password: string
  ) => {
    setShowLoader(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user: any = res.user;

      toastHandler(ToastType.Success, 'Successfully signed In');
      setToken(user?.accessToken);
      setUserId(user?.uid);
      localStorage.setItem(
        'loginItems',
        JSON.stringify({ token: user?.accessToken, userId: user?.uid })
      );

      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        score: [],
        email,
      });
    } catch (err: any) {
      console.error(err);
      toastHandler(ToastType.Error, err.message);
    } finally {
      setShowLoader(false);
    }
  };

  const logoutHandler = () => {
    signOut(auth);
    localStorage.removeItem('loginItems');
    setToken('');
    setUser({ name: '', email: '', score: [], uid: '' });
    setUserId('');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userId,
        user,
        setUser,
        setUserId,
        logoutHandler,
        loginHandler,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
