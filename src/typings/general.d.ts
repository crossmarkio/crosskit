declare global {
  var prisma: string;
  namespace Express {
    export interface Request {
      xummAuthHeaders: any;
      user: UserPayload;
    }
  }
}

declare module globalThis {
  var prisma: any;
  interface Window {
    request: any;
    id: any;
    ReactNativeWebView?: any;
    sdk: any;
  }
}
