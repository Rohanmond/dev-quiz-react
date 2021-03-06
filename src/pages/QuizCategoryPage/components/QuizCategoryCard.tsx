import { Link } from 'react-router-dom';
import { QuizModelType } from '../../../types/quiz.types';

type PropType = {
  cardData: QuizModelType;
};

export const QuizCategoryCard: React.FC<PropType> = ({ cardData }) => {
  const { quizName, quizId, image } = cardData;

  return (
    <div className='home-quiz-card'>
      <div className='home-quiz-card-img-container'>
        <img
          className='img-responsive border-radius-inherit'
          src={image}
          alt='quiz card-'
        />
      </div>
      <div className='home-card-header'>
        <h3>{quizName.toUpperCase()} Quiz</h3>
      </div>

      <div className='home-quiz-card-footer'>
        <Link
          to={`/${quizId}/rules`}
          className='home-quiz-card-footer-btn font-wt-semibold'
        >
          Play now
        </Link>
      </div>
    </div>
  );
};
