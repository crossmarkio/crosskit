import jwt from 'jsonwebtoken';
import config from 'config';
import { NextApiRequest, NextApiResponse } from 'next';
import * as trpc from '@trpc/server';
import { ExtendedNextApiRequest } from '@/typings/next';
import { Context } from '../context';

const uuidv4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

const reqApiKeyMatch = (ctx: Context) => {
  try {
    let reqApiKey = ctx.req.headers['x-api-key'];
    if (typeof reqApiKey == 'object') reqApiKey = reqApiKey[0];

    if (!reqApiKey) throw 'Missing request API key';
    if (!uuidv4.test(reqApiKey.trim())) throw 'Invalid format of request API key';

    const envKey = 'XAPP_' + reqApiKey.trim().replace(/-/g, '_');

    if (Object.keys(process.env).indexOf(envKey) === -1) throw 'Invalid request API key';

    /*     Object.assign(ctx.req, {
      authHeaders: {
        headers: {
          'X-API-Key': reqApiKey.trim(),
          //'X-API-Secret': process.env[envKey],
        },
      },
    }); */

    return { req: ctx.req, res: ctx.res } as {
      req: ExtendedNextApiRequest;
      res: NextApiResponse;
    };
  } catch (err: any) {
    throw new trpc.TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err,
    });
  }
};

const authorize = (ctx: Context) => {
  try {
    let authorization = ctx.req.headers['authorization'];
    if (typeof authorization == 'object') authorization = authorization[0];
    if (!authorization) throw 'Authorization key not found';

    const decodedJwt = jwt.verify(authorization, config.api.secret) as jwt.JwtPayload;
    const reqApiKey: string = decodedJwt['app'];

    if (!uuidv4.test(reqApiKey.trim())) throw 'JWT does not match valid API Key';

    const envKey = 'XAPP_' + reqApiKey.trim().replace(/-/g, '_');

    if (Object.keys(process.env).indexOf(envKey) === -1) throw 'JWT does not match valid API Key';

    /*     Object.assign(ctx.req, {
      authHeaders: {
        headers: {
          'X-API-Key': reqApiKey.trim(),
          //'X-API-Secret': process.env[envKey],
        },
      },
    }); */

    return { req: ctx.req, res: ctx.res } as {
      req: ExtendedNextApiRequest;
      res: NextApiResponse;
    };
  } catch (err: any) {
    throw new trpc.TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err,
    });
  }
};

export { reqApiKeyMatch, authorize };
