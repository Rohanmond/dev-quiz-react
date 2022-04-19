import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/categories' element={<QuizCategoryPage />} />
        <Route path='/questions' element={<QuizQuestions />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
