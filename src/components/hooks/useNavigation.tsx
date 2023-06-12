import { AnimatePresence } from 'framer-motion';
import React, { ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';
import {
  StepRouter,
  StepContextProvider,
  useStepContext,
  IStepContextProps,
} from 'src/context/nav';
import { IModalContextProps } from 'src/components/modals/context';

interface ContainerProps {
  key: string;
  started: boolean;
  ctx: IStepContextProps;
  modal: [Boolean, React.Dispatch<React.SetStateAction<Boolean>>];
  children: JSX.Element | JSX.Element[] | ReactNode;
}

interface Props {
  modal?: [Boolean, React.Dispatch<React.SetStateAction<Boolean>>];
  modalCtx: IModalContextProps;
  steps: any;
  isOpen: Boolean;
  container?: (props: ContainerProps) => JSX.Element;
  props?: any;
}

const Router = (props: Props) => {
  const ctx = useStepContext();
  const [start, setStart] = useState(false);

  useEffect(() => {
    console.log(start);
    if (props.isOpen) setStart(true);
    if (!props.isOpen) setStart(false);
  }, [props.isOpen]);

  if (!props.container || !props.modal) return StepRouter(ctx, props.steps, props.props);

  return (
    <AnimatePresence
      mode="sync"
      onExitComplete={() => {
        props.modalCtx.isClosing[1](false);
      }}>
      {props.isOpen && (
        <props.container started={start} key={ctx.current} modal={props.modal} ctx={ctx}>
          {StepRouter(ctx, props.steps, props.props)}
        </props.container>
      )}
    </AnimatePresence>
  );
};

const useNavigation = (props: Props) => {
  let element = (
    <StepContextProvider steps={Object.keys(props.steps)}>
      {<Router {...props} />}
    </StepContextProvider>
  );

  return element;
};

export default useNavigation;
