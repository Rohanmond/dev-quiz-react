import { NavLink } from 'react-router-dom';
import './NavBar.css';
export const NavBar = () => {
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
      <div className='nav-right'>
        <ul className='nav-links'>
          <li className='nav-link-item'>
            <button className='btn btn-link-primary background-primary brd-rd-semi-sq login-btn'>
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
