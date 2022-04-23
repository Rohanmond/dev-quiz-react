import { QuestionDataType } from './data-context.types';

export type ActionType =
  | {
      type: 'ADD_QUESTION_DATA';
      payload: QuestionDataType;
    }
  | { type: 'RESET' }
  | {
      type: 'RECOVER_ANSWER_DATA';
      payload: { sessionData: QuestionDataType[] };
    };
