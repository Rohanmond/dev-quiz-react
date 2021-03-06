import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components';
import { useQuiz } from '../../contexts/data-context';
import './LandingPage.css';
export const LandingPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useQuiz();

  useEffect(() => {
    sessionStorage.removeItem('answerData');
    dispatch({ type: 'RESET' });
  }, []);
  return (
    <div className='landing-container'>
      <NavBar />
      <main className='landing-main-container'>
        <div className='landing-main-image'>
          <img
            src='https://res.cloudinary.com/donqbxlnc/image/upload/v1649996101/Saly-19_c_ddxxom.png'
            alt='landing hero img'
            className='img-responsive'
          />
        </div>
        <h3 className='landing-page-subheading'>
          DevQuiz is having quizzes on programming concepts specially on
          front-end part
        </h3>
        <button
          onClick={() => navigate('/categories')}
          className='btn btn-link-primary background-primary brd-rd-semi-sq'
        >
          Let's start
        </button>
      </main>
    </div>
  );
};
