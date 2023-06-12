import React from 'react';
import { useState, useRef, useEffect } from 'react';
import SelectWallet from '@components/modals/select/wallet';
import SelectToken from '@components/modals/select/token';
import SelectProtocol from '@components/modals/select/protocol';
import SelectNetworkType from '@components/modals/select/networkType';
import SelectExplorer from '@components/modals/select/explorer';
import { sleep } from '@common/utils/sleep';
import { useStateRef } from './useStateRef';
import { CardSchema } from '@store/schema/latest';
import { useStoreContext } from 'src/context';
import { useStateContext } from 'src/context/state';

import { TokenItem } from 'kit/dist/account/tokens';
import { postProcess } from '@common/utils/balance';
import {
  availableExplorers,
  availableNetworkTypes,
  availableProtocols,
} from '@common/constants/networks';

const useSelect = (
  type: 'wallet' | 'token' | 'protocol' | 'network' | 'explorer',
  address?: string
) => {
  const repo = useStateContext().repo;
  const [globalWallet] = useStoreContext().globalWallet;

  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const getTokens = () => {
    if (type === 'token' && address) return postProcess(globalWallet, address)[0];
    if (repo.Card.getAllCards().length === 0) return [];
    return postProcess(globalWallet, repo.Card.getAllCards()[0].address)[0];
  };

  const getInitialToken = () => {
    let tokens = getTokens();
    if (!tokens || tokens.length === 0) return undefined;
    if (tokens) return tokens[0];
  };

  const [selectWallet, setSelectWallet] = useState<CardSchema>(repo.Card.getAllCards()[0]);
  const [selectToken, setSelectToken] = useState<TokenItem | undefined>(getInitialToken());
  const [selectProtocol, setSelectProtocol] = useState<'XRPL' | 'EVM'>('XRPL');
  const [selectType, setSelectType] = useState<string>(availableNetworkTypes[0]);

  const [selectExplorer, setSelectExplorer] = useState<string>(
    availableExplorers[selectProtocol][0]
  );

  let element = (
    <>
      {type === 'wallet' && (
        <SelectWallet
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          select={selectWallet}
          setSelect={setSelectWallet}
        />
      )}
      {type === 'token' && selectToken && getTokens() && (
        <SelectToken
          isOpen={isOpen}
          tokens={getTokens()}
          setIsOpen={setIsOpen}
          select={selectToken}
          setSelect={setSelectToken}
        />
      )}
      {type === 'protocol' && (
        <SelectProtocol
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          select={selectProtocol}
          setSelect={setSelectProtocol}
        />
      )}
      {type === 'network' && (
        <SelectNetworkType
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          select={selectType}
          setSelect={setSelectType}
        />
      )}
      {type === 'explorer' && (
        <SelectExplorer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          options={availableExplorers[selectProtocol]}
          select={selectExplorer}
          setSelect={setSelectExplorer}
        />
      )}
    </>
  );

  useEffect(() => {
    setSelectExplorer(availableExplorers[selectProtocol][0]);
  }, [selectProtocol]);

  const open = () => setIsOpen(true);

  useEffect(() => {
    setIsOpen(false);
  }, [selectWallet, selectToken, selectProtocol, selectType, selectExplorer]);

  return {
    element,
    open,
    selectWallet,
    selectToken,
    selectProtocol,
    setSelectProtocol,
    selectType,
    selectExplorer,
  } as const;
};

export default useSelect;
