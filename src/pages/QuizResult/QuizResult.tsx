import React from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../../components';
import { useQuiz } from '../../contexts/data-context';
import { QuizModel } from '../../DataModel/quiz.model';

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
            const userRight = el.options[el.selectedOption].isRight;
            return (
              <div key={el.questionIndex} className='quiz-result-content'>
                <p className='font-wt-semibold text-align-center'>
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
          <a
            className='btn btn-link-primary background-primary brd-rd-semi-sq'
            href='../home/home.html'
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
};
