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
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  loginHandler: LoginHandlerType;
  signupHandler: SignupHandlerType;
  logoutHandler: LogoutHandlerType;
};

export type LayoutPropType = {
  children: React.ReactNode;
};

export type ToastHandlerType = (type: string, message: string) => void;

export type User =
  | {
      email: string;
      name: string;
      score: Score[];
      uid: string;
    }
  | {};

export type Score = {
  categoryName: string;
  result: number;
};
