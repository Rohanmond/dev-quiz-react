export type QuizModelType = {
  quizName: string;
  quizId: string;
  image: string;
  quizCategory: string;
  questions: QuesType[];
  points: number;
};

export type QuesType = {
  question: string;
  point?: number;
  options: OptionType[];
};

type OptionType = {
  value: string;
  isRight: boolean;
};
