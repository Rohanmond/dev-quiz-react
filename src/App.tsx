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
import { useAuth } from './contexts/auth-context';
import { Profile } from './pages/Profile/Profile';
import { Details } from './pages/Profile/components/Details/Details';
import { Dashboard } from './pages/Profile/components/Dashboard/Dashboard';
import { LeaderBoard } from './pages/LeaderBoard/LeaderBoard';
import { useTheme } from './contexts/theme-context';
import { useLoader } from './contexts/loader-context';
import { Loader } from './components/Loader/Loader';
import { Footer } from './components/Footer/Footer';

function App() {
  const { state } = useQuiz();
  const { theme } = useTheme();
  const { showLoader } = useLoader();

  return (
    <div className='App' data-theme={theme}>
      {showLoader ? <Loader /> : null}
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
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        >
          <Route path='details' element={<Details />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/leader-board' element={<LeaderBoard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
