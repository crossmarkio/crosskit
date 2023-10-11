import { apiRouter } from './api.routes';
import { t } from './router';

export const appRouter = t.router({
  api: apiRouter,
});

export type AppRouter = typeof appRouter;
