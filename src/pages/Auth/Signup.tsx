import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import './Auth.css';

export const Signup = () => {
  const { signupHandler, token } = useAuth();
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (token) {
      navigate('/categories');
    }
  });

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    signupHandler(signupForm.name, signupForm.email, signupForm.password);
  };
  return (
    <div className='login-container'>
      <main className='login-main'>
        <div className='login-card brd-rd-semi-sq'>
          <div className='login-card-header'>
            <h3 className='text-align-center'>Signup</h3>
          </div>
          <div className='login-card-item'>
            <div className='input-container'>
              <label>Name</label>
              <input
                placeholder='Mr. Developer'
                className='text-input'
                type='text'
                value={signupForm.name}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, name: e.target.value })
                }
              />
            </div>
          </div>
          <div className='login-card-item'>
            <div className='input-container'>
              <label>Email address</label>
              <input
                placeholder='abc@devQuiz.com'
                className='text-input'
                type='email'
                value={signupForm.email}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, email: e.target.value })
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
                value={signupForm.password}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, password: e.target.value })
                }
              />
            </div>
          </div>
          <div className='login-card-item'>
            <div className='input-container'>
              <label>Confirm password</label>
              <input placeholder='' className='text-input' type='password' />
            </div>
          </div>

          <div className='login-card-item'>
            <button
              onClick={onSubmitHandler}
              className='btn btn-link-primary background-primary text-align-center brd-rd-semi-sq'
            >
              Create New Account
            </button>
            <Link
              className='btn btn-link-secondary outlined-secondary text-align-center brd-rd-semi-sq'
              to={'/login'}
            >
              Already have an account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
