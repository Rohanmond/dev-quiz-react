import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../contexts/auth-context';
import './Details.css';

export const Details = () => {
  const { user, logoutHandler } = useAuth();

  const navigate = useNavigate();

  return (
    <div className='profile-details-container'>
      <div className='profile-details-item'>
        <p className='profile-details-item-label'>Name</p>
        <p>{user?.name}</p>
      </div>
      <div className='profile-details-item'>
        <p className='profile-details-item-label'>Email</p>
        <p>{user?.email}</p>
      </div>
      <div className='profile-details-footer'>
        <button
          onClick={() => {
            logoutHandler();
            navigate('/');
          }}
          className='btn btn-primary background-danger brd-rd-semi-sq'
        >
          Logout
        </button>
      </div>
    </div>
  );
};
