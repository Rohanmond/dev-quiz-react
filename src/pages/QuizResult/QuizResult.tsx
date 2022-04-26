import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavBar } from '../../components';
import { useQuiz } from '../../contexts/data-context';
import { QuizModel } from '../../DataModel/quiz.model';
import { addScore } from '../../Services/result-service';

import './QuizResult.css';

export const QuizResult = () => {
  const { quizId } = useParams();
  const { state } = useQuiz();

  const quizData = QuizModel.find((el) => el.quizId === quizId) || {
    questions: [],
    points: 5,
  };
  const results = state.answers.map((el) => {
    return { ...el, ...quizData?.questions[el.questionIndex - 1] };
  });
  const eachQuestionPoint = quizData?.points || 5;
  const totalQuestions = quizData?.questions.length;
  const points = results.reduce((acc, curr) => {
    const options = curr.options || [];

    return options[curr.selectedOption]?.isRight
      ? acc + eachQuestionPoint
      : acc;
  }, 0);
  console.log(results, points);

  useEffect(() => {
    sessionStorage.removeItem('answerData');
    if (quizId) addScore(points, quizId);
  }, []);

  return (
    <>
      <NavBar />
      <div className='quiz-result-container'>
        <div className='quiz-result-header'>
          <h3>Result</h3>
        </div>
        <div className='quiz-score'>
          <p>
            Final Score: {points}/{eachQuestionPoint * totalQuestions}
          </p>
        </div>
        <div className='quiz-results-container'>
          {results.map((el) => {
            const userRight = el.options[el.selectedOption]?.isRight;
            return (
              <div key={el.questionIndex} className='quiz-result-content'>
                <p className='font-wt-semibold text-align-center'>
                  <span className='result-question-status'>
                    {userRight ? (
                      <i
                        title='correct'
                        className='fas fa-check-circle color-success'
                      ></i>
                    ) : userRight === false ? (
                      <i
                        title='wrong'
                        className='fas fa-times-circle color-danger'
                      ></i>
                    ) : (
                      <i
                        title='not-selected'
                        className='fas fa-exclamation-triangle color-warn'
                      ></i>
                    )}
                  </span>
                  {'     '}
                  {el.question}
                </p>
                {el.options.map((option, index) => {
                  return (
                    <React.Fragment key={option.value}>
                      {userRight ? (
                        <div
                          className={`alert  brd-rd-semi-sq ${
                            option.isRight
                              ? 'background-success'
                              : 'background-result'
                          }`}
                        >
                          <p className='alert-msg quiz-result'>
                            {option.value}
                          </p>
                        </div>
                      ) : (
                        <div
                          className={`alert  brd-rd-semi-sq ${
                            el.selectedOption === index
                              ? 'background-danger'
                              : option.isRight
                              ? 'background-success'
                              : 'background-result'
                          }`}
                        >
                          <p className='alert-msg quiz-result'>
                            {option.value}
                          </p>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className='result-footer'>
          <Link
            className='btn btn-link-primary background-primary brd-rd-semi-sq'
            to={'/categories'}
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};
