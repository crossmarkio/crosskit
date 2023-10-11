import type { NextApiRequest } from 'next';
import type { NextRequest } from 'next/server';

export interface UserPayload {
  id?: number;
  email?: string;
  role?: string;
  ownsToken: (id: any, token: any) => Promise<boolean>;
}

export interface ExtendedNextApiRequest extends NextApiRequest {
  authHeaders: any;
  user: UserPayload;
  ip: string;
  Authorization: string;
  url: string;
  data: any;
  xummAuthHeaders?: {
    headers: {
      'X-API-Key': string;
      'X-API-Secret': string;
    };
  };
}

export interface IUser {
  username: string;
  accessToken: string;
  id: number;
}

export interface IBasicUser {
  id: number;
  username: string | null;
  email: string;
  role: string;
  verified: boolean;
}
