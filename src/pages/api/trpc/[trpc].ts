import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from 'server/trpc/router/app.routes';
import { createContext } from 'server/trpc/context';

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      // send to bug reporting
      console.error('Something went wrong', error);
    }
  },
});
