import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import {
  validateEmail,
  validateOnlyString,
  validatePassword,
} from '../../utils/utils';
import './Auth.css';

export const Signup = () => {
  const { signupHandler, token } = useAuth();
  const location: any = useLocation();
  const navigate = useNavigate();
  const [signupForm, setSignupForm]: any = useState({
    name: '',
    email: '',
    password: '',
    'confirm-password': '',
  });
  const resetFormError = {
    name: '',
    email: '',
    password: '',
    'confirm-password': '',
  };
  const [formError, setFormError] = useState(resetFormError);

  useEffect(() => {
    if (token) {
      navigate(location.state?.from?.pathname || '/categories', {
        replace: true,
      });
    }
  }, [token]);

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let flagErr = false;
    let newFormError: any = {};
    Object.keys(formError).forEach((key) => {
      newFormError[key] = '';
      if (signupForm[key] === '' && key !== 'confirm-password') {
        newFormError[key] = `${key} shouldn't be empty`;
        flagErr = true;
      }
    });
    if (signupForm.password !== signupForm['confirm-password']) {
      flagErr = true;
      newFormError['confirm-password'] =
        "Password and confirm password didn't matched";
    }
    if (flagErr) {
      setFormError(newFormError);
      return;
    }

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
                onChange={(e) => {
                  setSignupForm({ ...signupForm, name: e.target.value });
                  if (!validateOnlyString(e.target.value)) {
                    setFormError({
                      ...formError,
                      name: 'Name should be in strings',
                    });
                  } else {
                    setFormError({ ...formError, name: '' });
                  }
                }}
              />
              {formError.name && (
                <div className='err-msg font-wt-semibold'>{formError.name}</div>
              )}
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
                onChange={(e) => {
                  setSignupForm({ ...signupForm, email: e.target.value });
                  if (!validateEmail(e.target.value)) {
                    setFormError({
                      ...formError,
                      email: 'Email should be in correct format',
                    });
                  } else {
                    setFormError({ ...formError, email: '' });
                  }
                }}
              />
              {formError.email && (
                <div className='err-msg font-wt-semibold'>
                  {formError.email}
                </div>
              )}
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
                onChange={(e) => {
                  setSignupForm({ ...signupForm, password: e.target.value });
                  if (!validatePassword(e.target.value)) {
                    setFormError({
                      ...formError,
                      password:
                        'Password should be in 8 to 20 chars and should have one digit',
                    });
                  } else {
                    setFormError({ ...formError, password: '' });
                  }
                }}
                onFocus={() =>
                  setFormError({ ...formError, 'confirm-password': '' })
                }
              />
              {formError.password && (
                <div className='err-msg font-wt-semibold'>
                  {formError.password}
                </div>
              )}
            </div>
          </div>
          <div className='login-card-item'>
            <div className='input-container'>
              <label>Confirm password</label>
              <input
                placeholder=''
                value={signupForm['confirm-password']}
                className='text-input'
                type='password'
                onChange={(e) => {
                  setSignupForm({
                    ...signupForm,
                    'confirm-password': e.target.value,
                  });
                }}
                onFocus={() =>
                  setFormError({ ...formError, 'confirm-password': '' })
                }
              />
              {formError['confirm-password'] && (
                <div className='err-msg font-wt-semibold'>
                  {formError['confirm-password']}
                </div>
              )}
            </div>
          </div>

          <div className='login-card-item'>
            <button
              onClick={onSubmitHandler}
              className='btn btn-link-primary background-primary text-align-center brd-rd-semi-sq'
            >
              Create New Account
            </button>
            <div className='auth-link-container'>
              <span className='font-wt-semibold'>Already have an account?</span>
              <span
                className='auth-link font-wt-semibold'
                onClick={() => navigate('/login')}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
