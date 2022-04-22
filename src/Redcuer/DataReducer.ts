import { ActionType, DataStateType } from '../types';

export const quizReducer = (
  state: DataStateType,
  action: ActionType
): DataStateType => {
  switch (action.type) {
    case 'ADD_QUESTION_DATA':
      return { ...state };
    case 'RESET':
      return { ...state };
  }
};
