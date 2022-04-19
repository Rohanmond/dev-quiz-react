import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { createContext, useContext, useState } from 'react';
import { auth, db } from '../firebase';
import { AuthContextType, LayoutProp } from '../types/types';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: LayoutProp) => {
  const localStorageToken = JSON.parse(
    localStorage.getItem('loginItems') || '{}'
  );
  const [token, setToken] = useState(localStorageToken?.token);
  const [userId, setUserId] = useState(localStorageToken?.user);

  const loginHandler = async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
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
      const user = res.user;
      console.log(res);
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        loginHandler,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
