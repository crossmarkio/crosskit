import { initTRPC, TRPCError } from '@trpc/server';
import { Context } from '../context';
import { authorize, reqApiKeyMatch } from '../middleware/api.middleware';
import superjson from 'superjson';
import { OpenApiMeta } from 'trpc-openapi';

export const t = initTRPC
  .context<Context>()
  .meta<OpenApiMeta>()
  .create({
    transformer: superjson,
    errorFormatter: ({ error, shape }) => {
      if (error.code === 'INTERNAL_SERVER_ERROR' && process.env.NODE_ENV === 'production') {
        return { ...shape, message: 'Internal server error' };
      }
      return shape;
    },
  });

export const publicProcedure = t.procedure;

const auth = t.middleware(({ next, ctx }) => {
  let c = authorize(ctx);
  return next({
    ctx: { req: c.req, c: ctx.res },
  });
});

const reqApi = t.middleware(({ next, ctx }) => {
  let c = reqApiKeyMatch(ctx);
  return next({
    ctx: { req: c.req, res: c.res },
  });
});

export const protectedJwtProcedure = t.procedure.use(auth);
export const protectedApiProcedure = t.procedure.use(reqApi);
