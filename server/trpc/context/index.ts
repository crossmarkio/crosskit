import * as trpc from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { v4 as uuid } from "uuid";

export const createContext = async (opts: CreateNextContextOptions) => {
  const requestId = uuid();
  opts.res.setHeader("x-request-id", requestId);
  return opts;
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
