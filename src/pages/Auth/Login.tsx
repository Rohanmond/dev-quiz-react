import './Auth.css';
export const Login = () => {
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
              />
            </div>
          </div>
          <div className='login-card-item'>
            <div className='input-container'>
              <label>Password</label>
              <input placeholder='' className='text-input' type='password' />
            </div>
          </div>
          <div className='login-card-item'>
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
          </div>
          <div className='login-card-item'>
            <a
              className='btn btn-link-primary background-primary text-align-center brd-rd-semi-sq'
              href='../home/home.html'
            >
              Login
            </a>
            <a
              className='btn btn-link-secondary outlined-secondary text-align-center brd-rd-semi-sq'
              href='../auth/signup.html'
            >
              Create New Account
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
