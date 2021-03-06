import { useEffect, useState } from 'react';
import { NavBar } from '../../components';
import { useQuiz } from '../../contexts/data-context';
import { QuizModel } from '../../DataModel/quiz.model';
import { QuizCategoryCard } from './components/QuizCategoryCard';
import './QuizCategoryPage.css';

export const QuizCategoryPage = () => {
  const [activeButton, setActiveButton] = useState('easy');
  const { dispatch } = useQuiz();
  const changeActive = (btn: string) => {
    setActiveButton(btn);
  };

  const quizData = QuizModel.filter((el) => el.quizCategory === activeButton);

  useEffect(() => {
    sessionStorage.removeItem('answerData');
    dispatch({ type: 'RESET' });
    sessionStorage.removeItem('quiz-timer');
  }, []);

  return (
    <div className='home-container'>
      <NavBar />
      <h2>Quiz Category</h2>
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
      </div>
    </div>
  );
};
