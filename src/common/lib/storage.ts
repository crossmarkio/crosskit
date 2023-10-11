import { type StateSchema } from "@/store/schema/v1";

const isServer = typeof window === "undefined";

export const get = (key: string) => {
  const data = !isServer && localStorage.getItem(key);
  if (data) return JSON.parse(data) as string;
  return;
};

export const set = (key: string, value: unknown) =>
  !isServer && localStorage.setItem(key, JSON.stringify(value));

export const remove = (key: string) =>
  !isServer && localStorage.removeItem(key);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  set,
  remove,
};
