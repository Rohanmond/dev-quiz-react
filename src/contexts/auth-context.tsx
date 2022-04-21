import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { AuthContextType, LayoutPropType, User } from '../types/types';
import { toastHandler, ToastType } from '../utils/utils';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: LayoutPropType) => {
  const localStorageToken = JSON.parse(
    localStorage.getItem('loginItems') || '{}'
  );
  const [token, setToken] = useState<string>(localStorageToken?.token || '');
  const [userId, setUserId] = useState<string>(localStorageToken?.userId || '');
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    if (token && userId) {
      (async () => {
        const q = query(collection(db, 'users'), where('uid', '==', userId));
        const queryRes = await getDocs(q);
        queryRes.forEach((doc) => {
          const userObj: any = doc.data();
          console.log(userObj);
        });
      })();
    }
  }, [token, userId]);

  const loginHandler = async (email: string, password: string) => {
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
    }
  };

  const signupHandler = async (
    name: string,
    email: string,
    password: string
  ) => {
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
    }
  };

  const logoutHandler = () => {
    signOut(auth);
    localStorage.removeItem('loginItems');
    setToken('');
    setUser({});
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
