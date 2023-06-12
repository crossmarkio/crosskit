import React, { ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';
import Passcode from '@components/modals/passcode';
import { sleep } from '@common/utils/sleep';
import { useStateRef } from './useStateRef';
import Dialogue from '@components/modals/dialogue';

interface Props {
  children?: JSX.Element | JSX.Element[] | ReactNode;
}

const useDialogue = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  let Element = (props: Props) => (
    <Dialogue isOpen={isOpen} setIsOpen={setIsOpen}>
      {props.children}
    </Dialogue>
  );

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { Element, open, close } as const;
};

export default useDialogue;
