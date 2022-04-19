import './QuizQuestions.css';
export const QuizQuestions = () => {
  return (
    <div className='quiz-question-container'>
      <div className='quiz-question-header'>
        <h3>I don't play the odds, I play the man</h3>
      </div>
      <div className='quiz-container-subheader'>
        <p>Question: 1 / 5</p>
        <p>Score: 0</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos saepe
        tempore dicta explicabo perspiciatis corrupti aliquam eos accusamus
        ipsa, dolorem quaerat sint eius. Quod eaque minus tempore eos quisquam
        animi!
      </p>
      <div className='quiz-question-options'>
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </div>
      <div className='quiz-question-footer'>
        <a href='../home/home.html'>Quit Game</a>
        <a href='../quiz_result/quiz_result.html'>Go next</a>
      </div>
    </div>
  );
};
