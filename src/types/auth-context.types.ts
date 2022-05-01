type LoginHandlerType = (email: string, password: string) => void;
type SignupHandlerType = (
  name: string,
  email: string,
  password: string
) => void;

type LogoutHandlerType = () => void;

export type AuthContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  loginHandler: LoginHandlerType;
  signupHandler: SignupHandlerType;
  logoutHandler: LogoutHandlerType;
};

export type LayoutPropType = {
  children: React.ReactNode;
};

export type UserType = {
  email: string;
  name: string;
  score: ScoreType[];
  uid: string;
};

export type ScoreType = {
  quizId: string;
  score: number;
};
