import env from './env';

export default {
  run: env['NODE_ENV'],
  api: {
    key: env['API_KEY'] || '',
    secret: env['API_SECRET'] || '',
  },
};
