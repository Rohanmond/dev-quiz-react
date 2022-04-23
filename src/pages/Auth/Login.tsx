import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

import './Auth.css';
export const Login = () => {
  const { loginHandler, token } = useAuth();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  });

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    console.log('called', loginForm);
    e.preventDefault();
    loginHandler(loginForm.email, loginForm.password);
  };

  return (
    <div className='login-container'>
      <main className='login-main'>
        <form onSubmit={onSubmitHandler} className='login-card brd-rd-semi-sq'>
          <div className='login-card-header'>
            <h3 className='text-align-center'>Login</h3>
          </div>
          <div className='login-card-item'>
            <div className='input-container'>
              <label>Email address</label>
              <input
                placeholder='abc@devquiz.com'
                className='text-input'
                type='text'
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className='login-card-item'>
            <div className='input-container'>
              <label>Password</label>
              <input
                placeholder=''
                className='text-input'
                type='password'
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className='login-card-item'>
            <button className='btn btn-link-primary background-primary text-align-center brd-rd-semi-sq'>
              Login
            </button>
            <button
              onClick={() =>
                setLoginForm({
                  email: 'mondalrohan108@gmail.com',
                  password: '123456',
                })
              }
              className='btn btn-link-primary background-primary text-align-center brd-rd-semi-sq'
            >
              Login with test credentials
            </button>
            <Link
              className='btn btn-link-secondary outlined-secondary text-align-center brd-rd-semi-sq'
              to={'/signup'}
            >
              Create New Account
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};
