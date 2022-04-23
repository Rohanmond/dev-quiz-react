import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
type propType = {
  children: React.ReactNode;
};

export const PrivateRoute = ({ children }: propType) => {
  const { token } = useAuth();
  return <>{token ? children : <Navigate to={'/login'} />}</>;
};
