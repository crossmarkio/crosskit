import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

export type ContextType = {
  address: [string | undefined, Dispatch<SetStateAction<string | undefined>>];
  collapse: [boolean, Dispatch<SetStateAction<boolean>>];
};

const StoreContext = createContext({} as ContextType);

interface StoreType {
  children: ReactNode;
}

const StoreProvider: React.FC<StoreType> = (props) => {
  const store: ContextType = {
    collapse: useState<boolean>(false),
    address: useState<string>(),
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
