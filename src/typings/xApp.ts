import { AxiosResponse } from 'axios';
import { Dispatch, SetStateAction } from 'react';

export interface ICommand {
  command: string;
  uuid?: string;
  refreshEvents?: boolean;
  url?: string;
}

export interface IQr {
  url: string;
  qrcode: string;
  websocket: string;
  uuid: string;
}

export interface IXummData {
  request: any;
  baseUrl: string;
  route: string;
  key: string;
  jwt?: string | undefined;
  payload?: any;
  uuid?: string | undefined;
}

export interface IContext {
  opened: [Boolean, Dispatch<SetStateAction<Boolean>>];
  scanned: [Boolean, Dispatch<SetStateAction<Boolean>>];
  signed: [Boolean, Dispatch<SetStateAction<Boolean>>];
  rejected: [Boolean, Dispatch<SetStateAction<Boolean>>];
  error: [Boolean, Dispatch<SetStateAction<Boolean>>];
  expire: [undefined | number, Dispatch<SetStateAction<undefined | number>>];
  websocket: [undefined | WebSocket, Dispatch<SetStateAction<undefined | WebSocket>>];
  state: [any | undefined, Dispatch<SetStateAction<any | undefined>>];
  qr: [IQr | undefined, Dispatch<SetStateAction<IQr | undefined>>];
  meta: [any | undefined, Dispatch<SetStateAction<AxiosResponse<any, any> | undefined>>];
  xummData: [IXummData | undefined, Dispatch<SetStateAction<IXummData | undefined>>];
}

export interface IContextProps extends IContext {
  opened: [Boolean, Dispatch<SetStateAction<Boolean>>];
  scanned: [Boolean, Dispatch<SetStateAction<Boolean>>];
  signed: [Boolean, Dispatch<SetStateAction<Boolean>>];
  error: [Boolean, Dispatch<SetStateAction<Boolean>>];
  expire: [undefined | number, Dispatch<SetStateAction<undefined | number>>];
  websocket: [undefined | WebSocket, Dispatch<SetStateAction<undefined | WebSocket>>];
  state: [any | undefined, Dispatch<SetStateAction<any | undefined>>];
  qr: [IQr | undefined, Dispatch<SetStateAction<IQr | undefined>>];
  meta: [any | undefined, Dispatch<SetStateAction<AxiosResponse<any, any> | undefined>>];
  xummData: [IXummData | undefined, Dispatch<SetStateAction<IXummData | undefined>>];
  refresh: (ctx: IContext) => void;
  payload: (ctx: IContext) => Promise<void>;
  onDemand: (ctx: IContext) => Promise<any>;
}
