import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";

import { BulkSign, BulkSignAndSubmit, BulkSubmit } from "./bulk";
import { NewSign, NewSignAndSubmit, NewSubmit } from "./new";
import Logger from "./logger";
import Helper from "./helper";
import Session from "./session";

export const Pages = ["New", "Bulk", "Logger", "Helper", "Session"];

export const Steps = {
  NewSign,
  NewSignAndSubmit,
  NewSubmit,
  BulkSign,
  BulkSignAndSubmit,
  BulkSubmit,
  Logger,
  Helper,
  Session,
};

interface IStepContextProps {
  current: string;
  steps: [number, Dispatch<SetStateAction<number>>];
  subs: [number, Dispatch<SetStateAction<number>>];
  page: [string, Dispatch<SetStateAction<string>>];
  sub: [string, Dispatch<SetStateAction<string>>];
}

const StepContext = createContext({} as IStepContextProps);

const useStepContext = () => useContext(StepContext);

const StepContextProvider = ({
  steps,
  pages,
  children,
}: {
  steps: string[];
  pages: string[];
  children: JSX.Element | JSX.Element[] | ReactNode;
}) => {
  const store: IStepContextProps = {
    current: steps[0] as string,
    steps: useState<number>(0),
    subs: useState<number>(0),
    page: useState(pages[0] as string),
    sub: useState(steps[0] as string),
  };

  store.current = store.sub[0];

  useEffect(() => {
    if (store.page[0] === "New") store.sub[1]("NewSign");
    if (store.page[0] === "Bulk") store.sub[1]("BulkSign");
    if (store.page[0] === "Logger") store.sub[1]("Logger");
    if (store.page[0] === "Helper") store.sub[1]("Helper");
    if (store.page[0] === "Session") store.sub[1]("Session");
  }, [store.page[0]]);

  return <StepContext.Provider value={store}>{children}</StepContext.Provider>;
};

const StepRouter = (
  context: IStepContextProps,
  directory: any,
  props?: any
) => {
  const sub = context.current;
  if (sub === "unset") return null;
  if (!sub) return null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const Element = directory[sub];

  return <Element {...props} />;
};

export { StepRouter, StepContextProvider, useStepContext };
