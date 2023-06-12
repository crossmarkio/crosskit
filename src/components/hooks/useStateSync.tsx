import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import config from 'src/common/config';
import storage from 'src/common/lib/storage';
import browser from 'src/common/module/browser';

const useStateSync = (init: any) => {
  const [isSynced, setIsSynced] = useState(false);
  const [state, setState] = useState(init);

  const handleMessage = (e: any) => {
    console.log('this is the received message');
    console.log(e);
  };

  const initState = async () => {
    let state = await storage.state.get();
    console.log(state);
    if (!state || config.dev) return await storage.state.set(state);
  };

  const handleStateChange = (store: any) => {
    if (!store?.state?.newValue) return;
    syncState('persist', store.state.newValue);
  };

  const syncState = async (control: string, state: any) => {
    console.log(control);
    let init_match = await determineSync();
    if (init_match) return setIsSynced(init_match);
    if (control === 'persist') setState(state);
    if (control === 'mem') await storage.state.set(state);
    let post_match = await determineSync();
    console.log('is sync after', post_match);
    return setIsSynced(post_match);
  };

  const determineSync = async () => {
    let memState = state;
    let persistState = await storage.state.get();
    return JSON.stringify(memState) === JSON.stringify(persistState);
  };

  useEffect(() => {
    setTimeout(() => syncState('mem', state), 2000);
  }, [state, isSynced]);

  useEffect(() => {
    initState();
    if (browser) browser.storage.onChanged.addListener(handleStateChange);
  }, []);

  return [state, setState] as const;
};

export default useStateSync;
