import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { NavBar } from '../../components';
import { useAuth } from '../../contexts/auth-context';
import { QuizModel } from '../../DataModel/quiz.model';
import { db } from '../../firebase';
import { ScoreType, UserType } from '../../types';
import './LeaderBoard.css';

export const LeaderBoard = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    (async () => {
      const userData: any = [];
      const q = query(collection(db, 'users'));
      onSnapshot(q, (data) => {
        data.docs.forEach((el) => {
          userData.push(el.data());
        });
        console.log(userData);
        setUserData(userData);
      });
    })();
  }, []);
  console.log(userData, 'userDataq');

  const users = useMemo(() => {
    let users = [];
    for (const el of userData) {
      let element: UserType = el;
      for (const scoreEle of element.score) {
        users.push({
          name: element.name,
          quizId: scoreEle.quizId,
          score: scoreEle.score,
        });
      }
    }
    users.sort((a, b) => b.score - a.score);
    return users;
  }, [userData]);
  console.log(users, 'users');
  return (
    <div>
      <NavBar />
      <div className='leaderboard-header'>
        <p>LEADERBOARD</p>
      </div>
      <div className='leaderboard-container'>
        {users.map((el) => {
          return (
            <div
              key={`${el.quizId}${el.name}${el.score}`}
              className='dashboard-details-item'
            >
              <div className='dash-details-left'>
                <p>{el.name}</p>
              </div>
              <div className='leaderboard-mid'>
                <p>
                  {
                    QuizModel.find((ele) => ele.quizId === el.quizId)
                      ?.quizName as string | undefined
                  }
                </p>
              </div>
              <div className='dash-details-right'>
                <p>{el.score}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
