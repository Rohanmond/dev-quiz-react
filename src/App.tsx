import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
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
