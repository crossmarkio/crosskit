// eslint-disable-next-line import/no-anonymous-default-export
export default {
  run: process.env['NODE_ENV'],
  xumm: {
    key: 'feb16c11-a35e-4bb4-98af-6fb52c767bb3',
  },
  init: {
    background: true,
    content: true,
  },
  defaultLang: 'EN',
  defaultTheme: 'dark',
  dev: process.env['REACT_APP_DEV'] || false,
  beta: process.env['REACT_APP_BETA'] || false,
  encyptionKey: 'KJTJ3ofwhy1Ua5T86KD9yOKju0iOyz2x',
  networks: {
    orchestra: process.env['REACT_APP_ORCHESTRA_RPC'] || false,
  },
};
