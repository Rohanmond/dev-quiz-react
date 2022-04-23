import React, { createContext, useContext, useReducer } from 'react';
import { quizReducer } from '../Redcuer/DataReducer';
import { DataContextType, DataStateType, QuizProviderProp } from '../types';

const QuizContext = createContext<DataContextType>({} as DataContextType);

const initialState: DataStateType = {
  answers: [],
};

const QuizDataProvider = ({ children }: QuizProviderProp) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext<DataContextType>(QuizContext);

export { QuizDataProvider, useQuiz };
