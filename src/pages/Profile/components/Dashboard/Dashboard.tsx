import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../../../components/Loader/Loader';
import { useAuth } from '../../../../contexts/auth-context';
import { useLoader } from '../../../../contexts/loader-context';
import { QuizModel } from '../../../../DataModel/quiz.model';
import { db } from '../../../../firebase';
import { UserType } from '../../../../types';
import './Dashboard.css';

export const Dashboard = () => {
  const { token, userId } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>({
    name: '',
    email: '',
    score: [],
    uid: '',
  });
  const { setShowLoader } = useLoader();

  useEffect(() => {
    if (token && userId) {
      setShowLoader(true);
      (async () => {
        try {
          const q = query(collection(db, 'users'), where('uid', '==', userId));
          onSnapshot(q, (data) => {
            setUser(data.docs[0].data() as UserType);
          });
        } catch (err) {
          console.log(err);
        } finally {
          setShowLoader(false);
        }
      })();
    }
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='dashboard-details-container'>
        {user.score.length === 0 ? (
          <div className='text-lg font-wt-semibold text-align-center'>
            You havn't played any quiz yet
          </div>
        ) : (
          user.score.map((el) => {
            return (
              <div key={el.quizId} className='dashboard-details-item'>
                <div className='dash-details-left'>
                  <p>
                    {
                      QuizModel.find((ele) => ele.quizId === el.quizId)
                        ?.quizName as string | undefined
                    }
                  </p>
                  <button
                    onClick={() => navigate(`/${el.quizId}/rules`)}
                    className='btn btn-secondary btn-sm outlined-secondary brd-rd-semi-sq'
                  >
                    Play Again
                  </button>
                </div>
                <div className='dash-details-right'>
                  <p>{el.score}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
