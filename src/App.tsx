import './App.css';
import { NavBar } from './components';
import {
  LandingPage,
  Login,
  QuizCategoryPage,
  QuizQuestions,
  QuizResult,
  QuizRules,
  Signup,
} from './pages';

function App() {
  return (
    <div className='App'>
      <QuizResult />
    </div>
  );
}

export default App;
