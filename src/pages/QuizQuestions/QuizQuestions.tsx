import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuiz } from '../../contexts/data-context';
import { QuizModel } from '../../DataModel/quiz.model';
import { Dispatch } from '../../types/data-context.types';
import { QuesType } from '../../types/quiz.types';
import { toastHandler, ToastType } from '../../utils/utils';
import './QuizQuestions.css';
export const QuizQuestions = () => {
  const { questionIndex, quizId } = useParams();
  const [activeButton, setActiveButton] = useState(-1);
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();
  const quizData = QuizModel.find((el) => el.quizId === quizId);
  const questions = quizData?.questions;
  let question: QuesType = { question: '', options: [] };
  if (questions) {
    question = questions[Number(questionIndex) - 1] ?? {};
  }

  useEffect(() => {
    if (state.answers.length === 0 && Number(questionIndex) !== 1) {
      const recoveredData = JSON.parse(
        sessionStorage.getItem('answerData') || '[]'
      );
      dispatch({
        type: 'RECOVER_ANSWER_DATA',
        payload: { sessionData: recoveredData },
      });
    }
  }, []);
  const dispatchQuizAnswer = (
    activeButton: number,
    dispatch: Dispatch,
    questionIndex: number,
    questions: QuesType[] | undefined
  ) => {
    if (activeButton === -1) {
      toastHandler(ToastType.Info, 'Pls select one option');
      return;
    }
    dispatch({
      type: 'ADD_QUESTION_DATA',
      payload: { questionIndex, selectedOption: activeButton },
    });
    sessionStorage.setItem(
      'answerData',
      JSON.stringify([
        ...JSON.parse(sessionStorage.getItem('answerData') || '[]'),
        { questionIndex: questionIndex, selectedOption: activeButton },
      ])
    );
    if (questionIndex === questions?.length) navigate(`/${quizId}/result`);
    else navigate(`/${quizId}/${Number(questionIndex) + 1}`);
  };

  console.log(activeButton);
  return (
    <div className='quiz-question-container'>
      <div className='quiz-question-header'>
        <h3>{quizData?.quizName}</h3>
      </div>
      <div className='quiz-container-subheader'>
        <p>
          Question: {questionIndex} / {questions?.length}
        </p>
        <p>Timer</p>
      </div>
      <p>{question?.question}</p>
      <div className='quiz-question-options'>
        {question.options.map((el, index) => {
          return (
            <button
              onClick={() => setActiveButton(index)}
              className={`quiz-question-options-button${
                index === Number(activeButton) ? ' quiz-question-active' : ''
              }`}
              key={el.value}
            >
              {el.value}
            </button>
          );
        })}
      </div>
      <div className='quiz-question-footer'>
        <Link to={'/categories'}>Quit Game</Link>
        {Number(questionIndex) === questions?.length ? (
          <p
            className='cursor-pointer color-success'
            onClick={() =>
              dispatchQuizAnswer(
                activeButton,
                dispatch,
                Number(questionIndex),
                questions
              )
            }
          >
            See Result
          </p>
        ) : (
          <p
            className='cursor-pointer color-success'
            onClick={() =>
              dispatchQuizAnswer(
                activeButton,
                dispatch,
                Number(questionIndex),
                questions
              )
            }
          >
            Go next
          </p>
        )}
      </div>
    </div>
  );
};
