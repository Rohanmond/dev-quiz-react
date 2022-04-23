import { useState } from 'react';
import { NavBar } from '../../components';
import { QuizModel } from '../../DataModel/quiz.model';
import { QuizCategoryCard } from './components/QuizCategoryCard';
import './QuizCategoryPage.css';

export const QuizCategoryPage = () => {
  const [activeButton, setActiveButton] = useState('easy');
  const changeActive = (btn: string) => {
    setActiveButton(btn);
  };

  const quizData = QuizModel.filter((el) => el.quizCategory === activeButton);
  console.log(quizData);
  return (
    <div className='home-container'>
      <NavBar />
      <h1>Quiz Category</h1>
      <div className='home-buttons'>
        <button
          onClick={() => changeActive('easy')}
          className={`home-cat-button ${
            activeButton === 'easy'
              ? 'home-cat-easy-active'
              : 'home-cat-button-easy'
          }`}
        >
          Easy
        </button>
        <button
          onClick={() => changeActive('medium')}
          className={`home-cat-button ${
            activeButton === 'medium'
              ? 'home-cat-medium-active'
              : 'home-cat-button-medium'
          }`}
        >
          Medium
        </button>
        <button
          onClick={() => changeActive('hard')}
          className={`home-cat-button ${
            activeButton === 'hard'
              ? 'home-cat-hard-active'
              : 'home-cat-button-hard'
          }`}
        >
          Hard
        </button>
      </div>
      <div className='home-cards'>
        {quizData.map((el) => {
          return <QuizCategoryCard key={el.quizId} cardData={el} />;
        })}
        {/* <div className='home-quiz-card brd-rd-semi-sq'>
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
        </div> */}
      </div>
    </div>
  );
};
