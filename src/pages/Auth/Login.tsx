import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

import './Auth.css';
export const Login = () => {
  const { loginHandler } = useAuth();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    loginHandler(loginForm.email, loginForm.password);
  };
  return (
    <div className='login-container'>
      <main className='login-main'>
        <div className='login-card brd-rd-semi-sq'>
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
          {/* <div className='login-card-item'>
            <div className='input-container-hz'>
              <input
                type='checkbox'
                name='remember-me-checkbox'
                value='remember-me'
                id='remember-me-checkbox'
              />
              <label htmlFor='remember-me-checkbox'>Remember me</label>
            </div>
            <a className='' href='#'>
              forgot your password?
            </a>
          </div> */}
          <div className='login-card-item'>
            <button
              onClick={onSubmitHandler}
              className='btn btn-link-primary background-primary text-align-center brd-rd-semi-sq'
            >
              Login
            </button>
            <button
              onClick={onSubmitHandler}
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
        </div>
      </main>
    </div>
  );
};
