import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Passcode from '@components/modals/passcode';
import { sleep } from '@common/utils/sleep';
import { useStateRef } from './useStateRef';

const usePasscode = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [passcode, setPasscode] = useState<string | undefined>(undefined);
  const [isConfirmed, setIsConfirmed] = useState<Boolean>(false);
  const [isRejected, setIsRejected] = useState<Boolean>(false);
  const [UUID, setUUID] = useState<undefined | string>(undefined);

  const onStateChange = useRef(false);
  const passcodeRef = useRef<string | undefined>(undefined);

  let element = (
    <Passcode
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      setPasscode={setPasscode}
      setIsConfirmed={setIsConfirmed}
      setIsRejected={setIsRejected}
      uuid={UUID}
    />
  );

  const open = () => setIsOpen(true);

  const verify = async (uuid?: string) => {
    if (uuid) setUUID(uuid);
    setIsOpen(true);
    await new Promise(async (resolve, reject) => {
      while (true) {
        if (onStateChange.current) return resolve('');
        await sleep(1000);
      }
    });
    onStateChange.current = false;
    return passcodeRef.current;
  };

  useEffect(() => {
    if (isConfirmed) {
      passcodeRef.current = passcode;
      onStateChange.current = true;
      setIsOpen(false);
    }
    if (isRejected) {
      onStateChange.current = true;
      setIsOpen(false);
    }
  }, [isConfirmed, isRejected]);

  return { element, verify, open, isOpen, isConfirmed, isRejected, passcode } as const;
};

export default usePasscode;
