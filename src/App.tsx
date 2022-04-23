import { Navigate, Route, Routes } from 'react-router-dom';
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
import { PrivateRoute } from './components';
import { useQuiz } from './contexts/data-context';

function App() {
  const { state } = useQuiz();

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
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/:quizId'>
          <Route
            path='rules'
            element={
              <PrivateRoute>
                <QuizRules />
              </PrivateRoute>
            }
          />
          <Route
            path=':questionIndex'
            element={
              <PrivateRoute>
                <QuizQuestions />
              </PrivateRoute>
            }
          />
          <Route
            path='result'
            element={
              state.answers.length === 0 ? (
                <Navigate to='/categories' />
              ) : (
                <QuizResult />
              )
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
