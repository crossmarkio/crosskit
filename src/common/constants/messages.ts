export var TYPE_INIT = 'init';
export var TYPE_REFRESH = 'refresh';
export var TYPE_DISCONNECT = 'disconnect';
export var TYPE_PING = 'ping';
export var TYPE_REQUEST = 'request';
export var TYPE_RESPONSE = 'response';

export var COMMAND_VERSION = 'version';
export var COMMAND_IS_CONNECTED = 'isConnected';
export var COMMAND_IS_LOCKED = 'isLocked';
export var COMMAND_OPEN = 'open';
export var COMMAND_SIGN = 'sign';

export var EVENT_ACCOUNTS_CHANGED = 'accountsChanged';
export var EVENT_CHAIN_CHANGED = 'chainChanged';
export var EVENT_CONNECT = 'connect';
export var EVENT_DISCONNECT = 'disconnect';
export var EVENT_MESSAGE = 'message';

export var messages = {
  general: {
    initalized: () => 'crossmark successfully initialized between dapp and content script',
  },
  warnings: {},
  errors: {},
};
