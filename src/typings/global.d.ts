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
}
