import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
type propType = {
  children: React.ReactNode;
};

export const PrivateRoute = ({ children }: propType) => {
  const location = useLocation();
  const { token } = useAuth();
  return (
    <>
      {token ? (
        children
      ) : (
        <Navigate to={'/login'} replace state={{ from: location.pathname }} />
      )}
    </>
  );
};
