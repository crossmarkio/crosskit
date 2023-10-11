import * as schema from './schema';

import config from '@common/config';
import { initialState } from '@common/constants/defaults';
import storage from '@common/lib/storage';
import { StateSchema } from './schema/v1';
import * as latest from '@store/schema/latest';
import crypto from '@common/lib/crypto';

export default class Storage {
  key: string;
  constructor() {
    this.key = config.dev ? 'state-dev' : 'state';
  }

  initialize = () => {};

  configure = async () => {
    let currentState: StateSchema = await storage.get(this.key);

    let state = currentState;
    if (config.dev && !currentState) {
      state = { ...initialState };
      let encrypted = crypto.encrypt(state, config.key);
      await storage.set(this.key, encrypted);
    }
    /*     if (!state || (state.schemaVersion && state.schemaVersion < latest.version)) {
      console.log('need to handle migrations');
    } */

    //logger.info(`state successfully migrated to version ${defaultState.version}`);
    return state;
  };
}
