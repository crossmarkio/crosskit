import React, {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

import Base from "@store/repo/base";

export type ContextType = {
  repo: Base;
};

const StoreContext = createContext({} as ContextType);

const base = new Base();

interface StoreType {
  children: ReactNode;
}

const StoreProvider: React.FC<StoreType> = (props) => {
  const store: ContextType = {
    repo: base,
  };

  useEffect(() => {
    return () => {
      //holder
    };
  }, []);

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
export default StoreProvider;
