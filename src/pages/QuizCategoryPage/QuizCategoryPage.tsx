import { NavBar } from '../../components';
import './QuizCategoryPage.css';

export const QuizCategoryPage = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <h1>Quiz Category</h1>
      <div className='home-buttons'>
        <button className='home-cat-button'>Easy</button>
        <button className='home-cat-button'>Medium</button>
        <button className='home-cat-button'>Hard</button>
      </div>
      <div className='home-cards'>
        <div className='home-quiz-card brd-rd-semi-sq'>
          <div className='home-quiz-card-img-container brd-rd-semi-sq'>
            <img
              className='img-responsive'
              src='https://picsum.photos/300/400'
              alt='quiz card-'
            />
          </div>
          <div className='home-card-header'>
            <h3>HTML Quiz</h3>
          </div>
          <div className='home-quiz-card-content'>
            <p className='text-align-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              doloremque!
            </p>
          </div>
          <div className='home-quiz-card-footer'>
            <a
              href='../quiz_rules/quiz_rules.html'
              className='home-quiz-card-footer-btn font-wt-semibold'
            >
              Play now
            </a>
          </div>
        </div>

        <div className='home-quiz-card brd-rd-semi-sq'>
          <div className='home-quiz-card-img-container brd-rd-semi-sq'>
            <img
              className='img-responsive'
              src='https://picsum.photos/300/400'
              alt='quiz card-'
            />
          </div>
          <div className='home-card-header'>
            <h3>HTML Quiz</h3>
          </div>
          <div className='home-quiz-card-content'>
            <p className='text-align-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              doloremque!
            </p>
          </div>
          <div className='home-quiz-card-footer'>
            <a
              href='../quiz_rules/quiz_rules.html'
              className='home-quiz-card-footer-btn font-wt-semibold'
            >
              Play now
            </a>
          </div>
        </div>
        <div className='home-quiz-card brd-rd-semi-sq'>
          <div className='home-quiz-card-img-container brd-rd-semi-sq'>
            <img
              className='img-responsive'
              src='https://picsum.photos/300/400'
              alt='quiz card-'
            />
          </div>
          <div className='home-card-header'>
            <h3>HTML Quiz</h3>
          </div>
          <div className='home-quiz-card-content'>
            <p className='text-align-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              doloremque!
            </p>
          </div>
          <div className='home-quiz-card-footer'>
            <a
              href='../quiz_rules/quiz_rules.html'
              className='home-quiz-card-footer-btn font-wt-semibold'
            >
              Play now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
