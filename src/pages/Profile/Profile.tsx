import './Profile.css';
import { NavLink, Outlet } from 'react-router-dom';
import { NavBar } from '../../components';
type toggleActiveType = {
  isActive: boolean;
};
export const Profile = () => {
  const toggleActive = ({ isActive }: toggleActiveType) => {
    return isActive
      ? 'profile-nav-item nav-link-active'
      : 'profile-nav-item nav-link';
  };

  return (
    <>
      <NavBar />
      <div className='profile-outer-container'>
        <div className='profile-container'>
          <div className='profile-nav'>
            <NavLink to={'/profile/details'} className={toggleActive}>
              Profile Information
            </NavLink>
            <NavLink to={'/profile/dashboard'} className={toggleActive}>
              Dashboard
            </NavLink>
          </div>
          <div className='profile-details'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
