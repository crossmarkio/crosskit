import browser from 'src/common/module/browser';
import { uuid } from '../helpers';

import {
  GeneralSchema,
  CardSchema,
  ContactSchema,
  ProfileSchema,
  SecuritySchema,
  StateSchema,
  UserSchema,
  PreferenceSchema,
  NetworkSchema,
} from '@store/schema/latest';
import { apps } from '@common/config/apps';
import { XRPL_Account } from 'xrpl-accountlib';
import { VaultSchema } from '@store/schema/v1/vault';

export const key = {
  accountType: 'string',
  address: 'string',
  secret: {
    familySeed: 'string',
    mnemonic: 'string',
    passphrase: 'string',
    path: 'string',
  },
  keypair: {
    algorithm: 'string',
    publicKey: 'string',
    privateKey: 'string',
  },
};

export const defaultApp = {
  name: '',
  url: '',
  type: 'link',
  categories: ['granted'],
  img: '',
  bg: 'light',
  approved: false,
  access: {
    expires: Date.now() + 60 * 60 * 24 * 30,
    duration: 60 * 60 * 24 * 30,
    isExpired: false,
    isRevoked: false,
    dateGranted: Date.now(),
    dateRevoked: undefined,
  },
  grants: {
    viewBalance: true,
    viewCurrentCard: true,
    viewCurrentNetwork: true,
    viewContacts: true,
    viewAllCards: true,
    promptSignRequest: true,
    allowableTxTypes: ['all'],
  },
};

export const encrptedUser = {
  type: 'string',
  id: 'number',
  createdAt: 'Date',
  updatedAt: 'Date',
  profile: {
    encrpted: 'boolean',
    data: 'string',
  },
  protocol: {},
  networks: [],
  security: {
    encrpted: 'boolean',
    data: 'string',
  },
  general: {
    theme: 'string',
    lang: 'string',
    currency: 'string',
    timezone: 'string',
  },
  developer: 'boolean',
  keyring: {
    encrpted: 'boolean',
    data: 'string',
  },
  addressBook: {
    encrpted: 'boolean',
    data: 'string',
  },
  backup: 'string',
  log: {
    encrpted: 'boolean',
    data: 'string',
  },
};

export const decrptedformat = {
  user: {
    type: 'string',
    id: 'number',
    createdAt: 'Date',
    updatedAt: 'Date',
    profile: {
      username: 'string',
      email: 'email',
      password: 'string',
      updatedAt: 'Date',
    },
    protocol: {},
    networks: {},
    security: {
      recovery: 'string',
      lastLogin: 'Date',
      autolock: 'boolean',
      forgotPassword: 'boolean',
      failedAttempts: 'number',
      erase: 'boolean',
      hideBalance: 'boolean',
      updatedAt: 'Date',
    },
    general: {
      theme: 'string',
      lang: 'string',
      currency: 'string',
      timezone: 'string',
    },
    developer: 'boolean',
    keyring: {
      encrpted: 'boolean',
      data: {
        '[key: string]': key,
      },
    },
    addressBook: [
      {
        name: 'string',
        address: 'string',
        protocol: 'string',
      },
    ],
    backup: 'string',
    log: {
      debug: 'string[]',
      session: 'string[]',
    },
  },
  payloads: {
    payload: 'any',
    params: {
      xummKey: 'string',
    },
    sender: {
      id: 'string',
      target: 'string',
      window: 'window',
    },
    time: {
      init: 'Date',
      expire: 'Date',
      limit: 'number',
    },
    isExpired: 'Boolean',
    isResolved: 'Boolean',
    origin: 'string',
    window: 'number | undefined',
    target: 'string',
  },
  keyring: {
    xumm: {
      wallet: {
        address: 'string',
        method: 'xumm',
      },
      key: 'string', //encrypted key string
    },
    self: {
      wallet: {
        address: 'string',
        method: 'self',
      },
      key: 'string', //encrypted key string
    },
  },
  protocol: {},
  accounts: {
    '[key: string]': encrptedUser,
  },
};

export const getVersion = () => {
  if (browser) return browser.runtime.getManifest().version;
  return process.env.REACT_APP_VERSION || `0.0.0`;
};

export const defaultState = {
  version: getVersion(),
  welcome: true,
  general: {
    deviceId: undefined,
    version: undefined,
  },
  format: decrptedformat,
  user: {},
  accounts: {},
};

export const defaultAppOpts = {
  filter: {
    category: [],
    approved: false,
    links: false,
    apps: false,
  },
  sort: {
    alpha_up: false,
    alpha_dn: false,
  },
  view: {
    list: false,
    grid: true,
  },
};

export const getDefaultApp = () => {
  return {
    filter: {
      category: [],
      approved: false,
      links: false,
      apps: false,
    },
    sort: {
      alpha_up: false,
      alpha_dn: false,
    },
    view: {
      list: false,
      grid: true,
    },
  };
};

export const getDefaultCard = () => {
  return {
    filter: {
      activated: false,
      source: [],
    },
    sort: {
      alpha_up: false,
      alpha_dn: false,
      bal_up: false,
      bal_dn: false,
    },
    view: {
      list: false,
      full: true,
    },
  };
};

export const getDefaultContact = () => {
  return {
    id: uuid(),
    nickname: undefined,
    first: undefined,
    last: undefined,
    email: undefined,
    phone: undefined,
    address: '',
    protocol: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  } as ContactSchema;
};

export const defaultCardOpts = {
  filter: {
    activated: false,
    source: [],
  },
  sort: {
    alpha_up: false,
    alpha_dn: false,
    bal_up: false,
    bal_dn: false,
  },
  view: {
    list: false,
    full: true,
  },
};

export const defaultNetwork = {
  id: 0,
  name: '',
  protocol: 'XRPL',
  type: 'dev',
  status: undefined,
  wss: '',
  rpc: '',
  explorer: '',
  faucet: null,
} as NetworkSchema;

export const defaultNetworks = [
  {
    id: 0,
    uuid: uuid(),
    name: 'mainnet',
    protocol: 'XRPL',
    type: 'main',
    status: undefined,
    wss: 'wss://s1.ripple.com',
    rpc: 'https://s1.ripple.com:51234',
    explorer: 'bithomp',
    faucet: null,
  },
  {
    id: 1,
    uuid: uuid(),
    name: 'testnet',
    protocol: 'XRPL',
    type: 'test',
    status: undefined,
    wss: 'wss://s.altnet.rippletest.net:51233',
    rpc: 'https://s.altnet.rippletest.net:51234',
    explorer: 'bithomp',
    faucet: null,
  },
  {
    id: 2,
    uuid: uuid(),
    name: 'devnet',
    protocol: 'XRPL',
    type: 'dev',
    status: undefined,
    wss: 'wss://s.devnet.rippletest.net:51233',
    rpc: 'https://s.devnet.rippletest.net:51234',
    explorer: 'bithomp',
    faucet: null,
  },
  {
    id: 21338,
    uuid: uuid(),
    name: 'hooks',
    protocol: 'XRPL',
    type: 'experimental',
    status: undefined,
    rpc: 'https://hooks-testnet-v3.xrpl-labs.com',
    wss: 'wss://hooks-testnet-v3.xrpl-labs.com',
    docs: 'https://xrpl-hooks.readme.io',
    explorer: 'https://hooks-testnet-v3-explorer.xrpl-labs.com',
    faucet: null,
  },
  {
    id: null,
    uuid: uuid(),
    name: 'amm',
    protocol: 'XRPL',
    type: 'xls-30d',
    status: undefined,
    wss: 'wss://amm.devnet.rippletest.net:51233',
    rpc: 'http://amm.devnet.rippletest.net:51234',
    explorer: 'bithomp',
    faucet: 'https://faucet.amm.rippletest.net/accounts',
    docs: 'https://dev.to/ripplexdev/xrpl-amm-network-available-for-testing-and-development-426i',
  },
  {
    id: null,
    uuid: uuid(),
    name: 'locking',
    protocol: 'XRPL',
    type: 'xls-38d',
    status: undefined,
    wss: 'wss://sidechain-net1.devnet.rippletest.net:51233',
    rpc: 'http://sidechain-net1.devnet.rippletest.net:51234',
    explorer: 'https://custom.xrpl.org/',
    faucet: 'https://sidechain-faucet.devnet.rippletest.net/accounts',
    docs: 'https://opensource.ripple.com/docs/xls-38d-cross-chain-bridge/parallel-networks-list/',
  },
  {
    id: null,
    uuid: uuid(),
    name: 'issuing',
    protocol: 'XRPL',
    type: 'xls-38d',
    status: undefined,
    wss: 'wss://sidechain-net2.devnet.rippletest.net:51233',
    rpc: 'http://sidechain-net2.devnet.rippletest.net:51234',
    explorer: 'https://custom.xrpl.org/',
    faucet: '',
    docs: 'https://opensource.ripple.com/docs/xls-38d-cross-chain-bridge/parallel-networks-list/',
  },
] as NetworkSchema[];

export const experimentalNetworks = [
  {
    id: 0,
    name: 'mainnet',
    protocol: 'XRPL',
    type: 'main',
    status: undefined,
    wss: 'wss://s1.ripple.com',
    rpc: 'https://s1.ripple.com:51234',
    explorer: 'https://bithomp.com/explorer',
    faucet: null,
  },
  {
    id: 1,
    name: 'testnet',
    protocol: 'XRPL',
    type: 'dev',
    status: undefined,
    wss: 'wss://s.altnet.rippletest.net:51233',
    rpc: 'https://s.altnet.rippletest.net:51234',
    explorer: 'https://test.bithomp.com/explorer',
    faucet: null,
  },
  {
    id: 2,
    name: 'devnet',
    protocol: 'XRPL',
    type: 'dev',
    status: undefined,
    wss: 'wss://s.devnet.rippletest.net:51233',
    rpc: 'https://s.devnet.rippletest.net:51234',
    explorer: 'https://devnet.xrpl.org',
    faucet: null,
  },
  {
    id: 225,
    name: 'hooks',
    protocol: 'XRPL',
    type: 'dev',
    status: undefined,
    rpc: 'https://hooks-testnet-v2.xrpl-labs.com',
    docs: 'https://xrpl-hooks.readme.io',
    explorer: 'https://hooks-testnet-v2-explorer.xrpl-labs.com',
    faucet: null,
  },
  {
    id: null,
    name: 'amm',
    protocol: 'XRPL',
    type: 'dev',
    status: undefined,
    wss: 'wss://amm.devnet.rippletest.net:51233',
    rpc: 'http://amm.devnet.rippletest.net:51234',
    explorer: 'https://amm.bithomp.com',
    faucet: 'https://faucet.amm.rippletest.net/accounts',
    docs: 'https://dev.to/ripplexdev/xrpl-amm-network-available-for-testing-and-development-426i',
  },
  {
    id: null,
    name: 'xevm',
    protocol: 'EVM',
    type: 'dev',
    status: undefined,
    wss: null,
    rpc: 'https://rpc-evm-sidechain.xrpl.org',
    explorer: 'https://evm-sidechain.xrpl.org',
    faucet: null,
  },
] as NetworkSchema[];

let devUser: UserSchema = {
  mounted: true,
  general: {
    version: undefined,
    initialized: true,
    language: 'en',
    discreetMode: false,
    theme: 'light',
  } as GeneralSchema,
  preference: {
    cardOptions: defaultCardOpts,
    appOptions: defaultAppOpts,
  } as PreferenceSchema,
  profile: {
    username: 'dev',
    email: undefined,
    type: 'local',
    slug: undefined,
    uuid: uuid(),
    developer: true,
    signedTOSVersion: undefined,
    signedTOSDate: undefined,
    accessToken: undefined,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  } as ProfileSchema,
  network: {
    id: 1,
    name: 'testnet',
    type: 'development',
    status: undefined,
    wss: 'wss://s.altnet.rippletest.net:51233',
    rpc: 'https://s.altnet.rippletest.net:51234',
    explorer: 'https://test.bithomp.com/explorer',
    faucet: null,
  } as NetworkSchema,
  networks: defaultNetworks,
  security: {
    passcode: '111111',
    password: 'password',
    recovery: 'recovery',
    minutesAutoLock: 1,
    lastPasscodeFailedTimestamp: 0,
    passcodeFailedAttempts: 0,
    lastUnlockedTimestamp: Date.now(),
    purgeOnBruteForce: false,
    passcodeFallback: false,
    autolock: false,
    attemptsBeforePurge: 5,
  } as SecuritySchema,
  cards: [
    {
      id: uuid(),
      address: 'rzQaZYpTJdzBcRvcCjarvpuatJVnYNmWi',
      label: 'dev wallet #1',
      source: 'self',
      publicKey: 'rzQaZYpTJdzBcRvcCjarvpuatJVnYNmWi',
      regularKey: 'rzQaZYpTJdzBcRvcCjarvpuatJVnYNmWi',
      mappedKeys: undefined,
      accessLevel: undefined,
      encryptionLevel: undefined,
      default: false,
      registeredAt: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      skinToken: undefined,
    },
    {
      id: uuid(),
      address: 'rEDwSU8XATzhVuwg19ykFqEoD7zHqFYL5n',
      label: 'dev wallet #2',
      source: 'self',
      publicKey: 'rEDwSU8XATzhVuwg19ykFqEoD7zHqFYL5n',
      regularKey: 'rEDwSU8XATzhVuwg19ykFqEoD7zHqFYL5n',
      mappedKeys: undefined,
      accessLevel: undefined,
      encryptionLevel: undefined,
      default: false,
      registeredAt: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      skinToken: undefined,
    },
    {
      id: uuid(),
      address: 'rL2adzTBiPAryZ4UYKnL8QCecG8zvQU1tY',
      label: 'xumm wallet',
      source: 'xumm',
      publicKey: 'rL2adzTBiPAryZ4UYKnL8QCecG8zvQU1tY',
      regularKey: 'rL2adzTBiPAryZ4UYKnL8QCecG8zvQU1tY',
      mappedKeys: undefined,
      accessLevel: undefined,
      encryptionLevel: undefined,
      default: false,
      registeredAt: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      skinToken: undefined,
    },
  ] as CardSchema[],
  apps: apps,
  contacts: [
    {
      nickname: 'nick',
      first: 'first',
      last: 'last',
      email: 'example@email.com',
      address: 'rL2adzTBiPAryZ4UYKnL8QCecG8zvQU1tY',
      protocol: 'main',
    },
  ] as ContactSchema[],
  vault: {} as VaultSchema,
  log: undefined,
};

export const getUnmountedUser = () => {
  return {
    mounted: false,
    general: {} as GeneralSchema,
    preference: {
      cardOptions: defaultCardOpts,
      appOptions: defaultAppOpts,
    } as PreferenceSchema,
    profile: {} as ProfileSchema,
    network: {} as NetworkSchema,
    networks: [] as NetworkSchema[],
    security: {} as SecuritySchema,
    cards: [] as CardSchema[],
    apps: [],
    contacts: [] as ContactSchema[],
    vault: {} as VaultSchema,
    log: undefined,
  };
};

export const devState: StateSchema = {
  version: getVersion(),
  schemaVersion: 1,
  deviceId: uuid(),
  user: { ...devUser },
  users: [{ ...devUser }] as UserSchema[],
};

export const placeholderAccount: XRPL_Account = {
  accountType: null,
  address: null,
  secret: {
    familySeed: null,
    mnemonic: null,
    passphrase: null,
    path: null,
    secretNumbers: null,
  },
  keypair: {
    algorithm: undefined,
    publicKey: undefined,
    privateKey: null,
  },
  signAs: function (address: string): XRPL_Account {
    throw new Error('Function not implemented.');
  },
};

export const getDefaultUser = (): UserSchema => {
  return {
    mounted: true,
    general: {
      version: undefined,
      initialized: true,
      language: 'en',
      discreetMode: false,
      theme: 'light',
    } as GeneralSchema,
    preference: {
      cardOptions: defaultCardOpts,
      appOptions: defaultAppOpts,
    } as PreferenceSchema,
    profile: {
      username: 'dev',
      email: undefined,
      type: 'local',
      slug: undefined,
      uuid: uuid(),
      developer: true,
      signedTOSVersion: undefined,
      signedTOSDate: undefined,
      accessToken: undefined,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    } as ProfileSchema,
    network: {
      id: 0,
      name: 'mainnet',
      protocol: 'XRPL',
      type: 'main',
      status: undefined,
      wss: 'wss://s1.ripple.com',
      rpc: 'https://s1.ripple.com:51234',
      explorer: 'https://bithomp.com/explorer',
      faucet: null,
    } as NetworkSchema,
    networks: defaultNetworks,
    security: {
      passcode: '111111',
      password: 'password',
      recovery: 'recovery',
      minutesAutoLock: 1,
      lastPasscodeFailedTimestamp: 0,
      passcodeFailedAttempts: 0,
      lastUnlockedTimestamp: Date.now(),
      purgeOnBruteForce: false,
      passcodeFallback: false,
      autolock: false,
      attemptsBeforePurge: 5,
    } as SecuritySchema,
    cards: [] as CardSchema[],
    apps: apps,
    contacts: [] as ContactSchema[],
    vault: {} as VaultSchema,
    log: undefined,
  };
};

export const initialState: StateSchema = {
  version: getVersion(),
  schemaVersion: 1,
  deviceId: uuid(),
  user: getUnmountedUser(),
  users: [] as UserSchema[],
};
