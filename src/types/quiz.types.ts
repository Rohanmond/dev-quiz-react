export type QuizModelType = {
  quizName: string;
  quizId: string;
  quizCategory: string;
  questions: QuesType[];
};

type QuesType = {
  question: string;
  point: number;
  options: OptionType[];
};

type OptionType = {
  value: string;
  isRight: boolean;
};
