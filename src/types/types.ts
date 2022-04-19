type loginHandler = (email: string, password: string) => void;
type signupHandler = (name: string, email: string, password: string) => void;

export type AuthContextType = {
  token: '';
  userId: string;
  loginHandler: loginHandler;
  signupHandler: signupHandler;
};

export interface LayoutProp {
  children: React.ReactNode;
}
