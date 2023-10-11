import type Base from "./base";
import { type GeneralSchema } from "src/store/schema/latest";
import EventEmitter from "events";

// events
declare interface General {
  on(event: "generalUpdate", listener: (general: GeneralSchema) => void): this;
  on(event: "purged", listener: () => void): this;
}

class General extends EventEmitter {
  #base: Base;
  constructor(base: Base) {
    super();
    this.#base = base;
    this.setMaxListeners(Infinity);
  }

  update = (opts: Partial<GeneralSchema>) => {
    this.#base.state.general = Object.assign({}, this.getGeneral(), {
      ...opts,
    });
    this.emit("generalUpdate");
  };

  getGeneral = () => this.#base.state.general;
  getAddress = () => this.#base.state.general.address;
  getCollapse = () => this.#base.state.general.collapsed;

  updateAddress = (a: string) => this.update({ address: a });
}

export default General;
