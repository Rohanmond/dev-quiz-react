import { NavBar } from '../../components';
import './QuizRules.css';
export const QuizRules = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <div className='quiz-rules-header'>
        <h1>Quiz Rules</h1>
      </div>
      <a
        href='../home/home.html'
        className='go-back-btn font-wt-semibold text-md'
      >
        Go Back
      </a>
      <div className='quiz-rules-content brd-rd-semi-sq'>
        <div className='rules-details'>
          <p>There are a total of 5 questions</p>
          <p>Each questions is of 10 points</p>
          <p>You get 30 seconds to answer each question</p>
          <p>score 50% or above to unlock the next level</p>
        </div>
        <a
          href='../quiz_question/quiz_question.html'
          className='start-quiz-btn font-wt-semibold'
        >
          Start Quiz
        </a>
      </div>
    </div>
  );
};
