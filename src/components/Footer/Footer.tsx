import './Footer.css';
export const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='footer-links'>
        <a
          target={'_blank'}
          rel='noreferrer'
          href='https://twitter.com/RohanMo33437915'
        >
          <i className='fab fa-twitter'></i>
        </a>
        <a
          rel='noreferrer'
          target={'_blank'}
          href='https://github.com/Rohanmond'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          rel='noreferrer'
          target={'_blank'}
          href='https://www.linkedin.com/in/rohanmondal/'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <div className='footer-text'>© No Copyright, Feel free to replicate.</div>
    </footer>
  );
};
