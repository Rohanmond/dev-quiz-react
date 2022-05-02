import { createContext, useContext, useState } from 'react';
import { LayoutPropType } from '../types';
type LoaderContextType = {
  showLoader: boolean;
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoaderContext = createContext<LoaderContextType>({
  showLoader: false,
} as LoaderContextType);

export const LoaderProvider = ({ children }: LayoutPropType) => {
  const [showLoader, setShowLoader] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ showLoader, setShowLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
export const useLoader = () => useContext(LoaderContext);
