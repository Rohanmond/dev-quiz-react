import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { stringify } from 'querystring';
import { auth, db } from '../firebase';

type scoreType = {
  quizId: string;
  score: number;
};
export const addScore = async (score: number, quizId: string) => {
  console.log('addscore', quizId, score);
  const currUser = auth.currentUser;
  const q = query(collection(db, 'users'), where('uid', '==', currUser?.uid));
  let userData: { id: string; data: any } = { id: '', data: {} };
  const queryRes = await getDocs(q);
  queryRes.forEach((doc) => {
    userData.id = doc.id;
    userData.data = doc.data();
  });
  if (userData?.data?.score.some((el: scoreType) => el.quizId === quizId)) {
    await updateDoc(doc(db, 'users', userData.id), {
      score: userData.data.score.map((el: scoreType) => {
        if (el.quizId === quizId) return { ...el, score };
        return el;
      }),
    });
  } else {
    if (userData.id) {
      await updateDoc(doc(db, 'users', userData.id), {
        score: userData.data.score.concat({ quizId, score }),
      });
    }
  }
};
