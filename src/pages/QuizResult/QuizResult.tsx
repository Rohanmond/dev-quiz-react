import { NavBar } from '../../components';
import './QuizResult.css';
export const QuizResult = () => {
  return (
    <>
      <NavBar />
      <div className='quiz-result-container'>
        <div className='quiz-result-header'>
          <h3>Result</h3>
        </div>
        <div className='quiz-score'>
          <p>Final Score: 20/50</p>
        </div>
        <div className='quiz-results-container'>
          <div className='quiz-result-content'>
            <p className='font-wt-semibold text-align-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              distinctio ut iste numquam velit rem corporis sequi,
            </p>
            <div className='alert background-result brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Micheal</p>
            </div>
            <div className='alert background-success brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Reginald</p>
            </div>
            <div className='alert background-danger brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Brandon</p>
            </div>
          </div>
          <div className='quiz-result-content'>
            <p className='font-wt-semibold text-align-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              distinctio ut iste numquam velit rem corporis sequi,
            </p>
            <div className='alert background-success brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Micheal</p>
            </div>
            <div className='alert background-result brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Reginald</p>
            </div>
            <div className='alert background-danger brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Brandon</p>
            </div>
          </div>
          <div className='quiz-result-content'>
            <p className='font-wt-semibold text-align-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              distinctio ut iste numquam velit rem corporis sequi,
            </p>
            <div className='alert background-danger brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Micheal</p>
            </div>
            <div className='alert background-success brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Reginald</p>
            </div>
            <div className='alert background-result brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Brandon</p>
            </div>
          </div>
          <div className='quiz-result-content'>
            <p className='font-wt-semibold text-align-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              distinctio ut iste numquam velit rem corporis sequi,
            </p>
            <div className='alert background-success brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Micheal</p>
            </div>
            <div className='alert background-result brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Reginald</p>
            </div>
            <div className='alert background-result brd-rd-semi-sq'>
              <p className='alert-msg quiz-result'>Brandon</p>
            </div>
          </div>
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
