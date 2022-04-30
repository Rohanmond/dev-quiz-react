import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

import './NavBar.css';
export const NavBar = () => {
  const navigate = useNavigate();
  const { token, logoutHandler } = useAuth();

  return (
    <nav className='navigation landing-nav'>
      <div className='nav-left'>
        <div className='nav-logo-container'>
          <NavLink to='/'>
            <img
              className='hero-logo quiz-hero-logo'
              src='https://res.cloudinary.com/donqbxlnc/image/upload/v1649996081/DevQuiz_txfczb.png'
              alt='nav logo'
            />
          </NavLink>
        </div>
      </div>
      <div className='nav-mid'></div>
      <div className='nav-right'>
        <ul className='nav-links'>
          <li className='nav-link-item'>
            <i className='fas fa-sun nav-link-item-icon'></i>
          </li>
          <li className='nav-link-item'>
            <i
              onClick={() => navigate('/leader-board')}
              className='fas fa-trophy nav-link-item-icon'
            ></i>
          </li>
          <li className='nav-link-item'>
            {!token && (
              <button
                onClick={() => navigate('/login')}
                className='btn btn-link-primary background-primary brd-rd-semi-sq login-btn'
              >
                Login
              </button>
            )}
            {token && (
              <i
                onClick={() => navigate('/profile/details')}
                className='far fa-user-circle nav-link-item-icon'
              ></i>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
