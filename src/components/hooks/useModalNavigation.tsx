import { AnimatePresence } from 'framer-motion';
import React, { ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';
import {
  StepRouter,
  StepContextProvider,
  useStepContext,
  IStepContextProps,
} from 'src/context/nav';
import { IModalContextProps, useModalContext } from 'src/components/modals/context';
import ModalContainer from '@components/modals/container';
import { ExtWrapper } from '@components/general/wrapper';

interface ContainerProps {
  key: string;
  started: boolean;
  ctx: IStepContextProps;
  modal: [Boolean, React.Dispatch<React.SetStateAction<Boolean>>];
  children: JSX.Element | JSX.Element[] | ReactNode;
}

interface Props {
  modal: [Boolean, React.Dispatch<React.SetStateAction<Boolean>>];
  steps: any;
  isOpen: Boolean;
  props?: any;
}

const Router = (props: Props) => {
  const modalctx = useModalContext();
  const ctx = useStepContext();
  const { next, prev, nav, reset, back } = useStepContext();
  const [data, setData] = useStepContext().data;
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (props.isOpen) setStart(true);
    if (!props.isOpen) setStart(false);
  }, [props.isOpen]);

  return (
    <AnimatePresence
      mode="sync"
      onExitComplete={() => {
        modalctx.isClosing[1](false);
        if (!props.isOpen) reset();
      }}>
      {props.isOpen && (
        <ModalContainer started={start} key={ctx.current} modal={props.modal} ctx={ctx}>
          {StepRouter(ctx, props.steps, props.props)}
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

const useModalNavigation = (props: Props) => {
  let element = (
    <StepContextProvider steps={Object.keys(props.steps)}>
      {<Router {...props} />}
    </StepContextProvider>
  );

  return element;
};

export default useModalNavigation;
