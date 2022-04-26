import { useEffect, useRef, useState } from 'react';
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
  const [timer, setTimer] = useState(
    Number(JSON.parse(sessionStorage.getItem('quiz-timer') || '45'))
  );
  const navigate = useNavigate();
  const quizData = QuizModel.find((el) => el.quizId === quizId);
  const questions = quizData?.questions;
  let question: QuesType = { question: '', options: [] };
  if (questions) {
    question = questions[Number(questionIndex) - 1] ?? {};
  }
  useEffect(() => {
    let id = setInterval(() => {
      if (timer > 1) {
        setTimer(timer - 1);
        sessionStorage.setItem('quiz-timer', JSON.stringify(timer - 1));
      } else {
        dispatchQuizAnswer(
          activeButton,
          dispatch,
          Number(questionIndex),
          questions
        );
      }
    }, 1000);
    return () => clearInterval(id);
  }, [timer]);

  useEffect(() => {
    console.log('hello', state, questionIndex);
    if (state.answers.length === 0 && Number(questionIndex) !== 1) {
      const recoveredData = JSON.parse(
        sessionStorage.getItem('answerData') || '[]'
      );
      console.log(recoveredData);
      if (recoveredData.length === 0)
        navigate(`/${quizId}/rules`, { replace: true });
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
    // if (activeButton === -1) {
    //   toastHandler(ToastType.Info, 'Pls select one option');
    //   return;
    // }
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

    if (questionIndex === questions?.length)
      navigate(`/${quizId}/result`, { replace: true });
    else navigate(`/${quizId}/${Number(questionIndex) + 1}`, { replace: true });
    setActiveButton(-1);
    setTimer(45);
    sessionStorage.removeItem('quiz-timer');
  };
  // if (timer <= 0) {
  //   console.log('inside rimer');
  //   dispatchQuizAnswer(
  //     activeButton,
  //     dispatch,
  //     Number(questionIndex),
  //     questions
  //   );
  // }

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
        <p
          className={`timer ${timer <= 10 ? 'color-danger' : 'color-success'}`}
        >
          <i className='fas fa-clock'></i>
          <p> {timer} Sec</p>
        </p>
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
