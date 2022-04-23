import { Link, useParams } from 'react-router-dom';
import { NavBar } from '../../components';
import { QuizModel } from '../../DataModel/quiz.model';
import './QuizRules.css';
export const QuizRules = () => {
  const { quizId } = useParams();

  const QuizData = QuizModel.find((el) => el.quizId);
  console.log(QuizData);
  return (
    <div className='home-container'>
      <NavBar />
      <div className='quiz-rules-container'>
        <div className='quiz-rules-header'>
          <h1>Quiz Rules</h1>
        </div>
        <Link
          to={'/categories'}
          className='go-back-btn font-wt-semibold text-md'
        >
          Go Back
        </Link>
        <div className='quiz-rules-content brd-rd-semi-sq'>
          <div className='rules-details'>
            <p>There are a total of {QuizData?.points} questions</p>
            <p>Each questions is of 10 points</p>
            <p>You get 60 seconds to answer each question</p>
          </div>
          <Link to={`/${quizId}/1`} className='start-quiz-btn font-wt-semibold'>
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};
