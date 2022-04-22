import React from 'react';
import { ActionType } from './data-reducer.types';

type Dispatch = (action: ActionType) => void;
export type DataStateType = {
  questions: QuestionDataType[];
};
export type QuestionDataType = {
  questionIndex: number;
  selectedOption: string;
};

export type QuizProviderProp = {
  children: React.ReactNode;
};

export type DataContextType = {
  state: DataStateType;
  dispatch: Dispatch;
};
