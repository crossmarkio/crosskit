import chalk from "chalk";

const isDev = process.env["NODE_ENV"] === "production";
//const isDev = process.env['NODE_ENV'] !== 'production';

export const logger = {
  error(...args: string[]) {
    if (isDev) console.log(chalk.red(...args));
  },
  warn(...args: string[]) {
    if (isDev) console.log(chalk.yellow(...args));
  },
  info(...args: string[]) {
    if (isDev) console.log(chalk.cyan(...args));
  },
  success(...args: string[]) {
    if (isDev) console.log(chalk.green(...args));
  },
};
