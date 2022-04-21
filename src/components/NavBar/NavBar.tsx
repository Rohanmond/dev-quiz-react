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
      <div className='nav-mid'>
        <input
          placeholder='search quiz'
          //   value={input}
          //   onChange={(e) => {
          //     setInput(e.target.value);
          //   }}
          //   onKeyDown={(e) => {
          //     if (e.key === 'Enter' || e.target.value === '' || e.keyCode === 8) {
          //       dispatch({
          //         type: ActionType.ChangeFilter,
          //         payload: {
          //           filterType: Filters.Search,
          //           filterValue: e.target.value,
          //         },
          //       });
          //       navigate('/products');
          //     }
          //   }}
          className='nav-search brd-rd-semi-sq nav-text-input'
          type='search'
        />
      </div>
      <div className='nav-right'>
        <ul className='nav-links'>
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
              <button
                onClick={() => logoutHandler()}
                className='btn btn-link-primary background-primary brd-rd-semi-sq login-btn'
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
