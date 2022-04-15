import './Auth.css';

export const Signup = () => {
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
            <div className='input-container'>
              <label>Confirm password</label>
              <input placeholder='' className='text-input' type='password' />
            </div>
          </div>
          <div className='login-card-item'>
            <div className='input-container-hz'>
              <input
                type='checkbox'
                name='terms-conditions-checkbox'
                value='accepted terms conditions'
                id='terms-conditions-checkbox'
              />
              <label htmlFor='terms-conditions-checkbox'>
                I accept all Terms &#38; Conditions
              </label>
            </div>
          </div>
          <div className='login-card-item'>
            <a
              className='btn btn-link-primary background-primary text-align-center brd-rd-semi-sq'
              href='../home/home.html'
            >
              Create New Account
            </a>
            <a
              className='btn btn-link-secondary outlined-secondary text-align-center brd-rd-semi-sq'
              href='../auth/login.html'
            >
              Already have an account
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
