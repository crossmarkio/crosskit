import chalk from 'chalk';

const isDev = process.env['NODE_ENV'] === 'production';
//const isDev = process.env['NODE_ENV'] !== 'production';

export const logger = {
  error(...args: unknown[]) {
    if (isDev) console.log(chalk.red(...args));
  },
  warn(...args: unknown[]) {
    if (isDev) console.log(chalk.yellow(...args));
  },
  info(...args: unknown[]) {
    if (isDev) console.log(chalk.cyan(...args));
  },
  success(...args: unknown[]) {
    if (isDev) console.log(chalk.green(...args));
  },
};
