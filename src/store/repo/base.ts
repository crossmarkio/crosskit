/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import EventEmitter from "events";
import storage from "src/common/lib/storage";
import { type StateSchema } from "src/store/schema/v1";
import { initialState } from "@common/constants/defaults";
import crypto from "@common/lib/crypto";
import config from "@common/config";

import General from "./general";

const proxyHandlers = (base?: Base) => {
  return {
    get: (target: any, key: string) => {
      if (base) base.emit("stateTargeted", target);
      if (key === "isProxy") return true;

      const prop = target[key];

      // return if property not found
      if (typeof prop == "undefined") return;

      // set value as proxy if object
      if (prop && !prop?.isProxy && typeof prop === "object") {
        target[key] = new Proxy(prop, proxyHandlers(base));
      }

      return target[key];
    },
    set: (target: any, prop: any, value: any) => {
      target[prop] = value;
      if (base) base?.emit("stateChanged", base.state);
      return true;
    },
  };
};

// events
declare interface Base {
  on(event: "stateChanged", listener: (state: StateSchema) => void): this;
  on(event: "stateChangeSet", listener: (state: StateSchema) => void): this;
  on(event: "stateTargeted", listener: (state: StateSchema) => void): this;
  on(event: "stateInitialized", listener: (state: StateSchema) => void): this;
  on(event: "forceStateChange", listener: (state: StateSchema) => void): this;
}

class Base extends EventEmitter {
  stateKey = "state";

  state: StateSchema = initialState;
  flat: StateSchema = initialState;

  General: General;
  constructor() {
    super();
    this.General = new General(this);
    void this.init();
    this.setMaxListeners(Infinity);
  }

  getEncryptionKey = () => config.key;

  init = () => {
    const currentState = storage.get(this.stateKey);

    if (!currentState) {
      const newState = {
        ...initialState,
      };

      const encrypted = crypto.encrypt(newState, this.getEncryptionKey());
      storage.set(this.stateKey, encrypted);

      this.state = this.observer(newState);
      this.flat = newState;
    }
    if (currentState) {
      const state = crypto.decrypt(
        currentState,
        this.getEncryptionKey()
      ) as StateSchema;
      this.state = this.observer(state);
      this.flat = state;
    }
    this.emit("stateInitialized", this.state);

    this.addListener("stateChanged", (state: StateSchema) => {
      const encrypted = crypto.encrypt(state, this.getEncryptionKey());
      storage.set(this.stateKey, encrypted);

      this.emit("stateChangeSet", state);
    });
    return this.state;
  };

  forceStateSet = (state: StateSchema) => {
    this.state = this.observer(state);
    setTimeout(() => this.emit("forceStateChange", state), 1000);
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  observer = (state: StateSchema) => new Proxy(state, proxyHandlers(this));
}

export default Base;
