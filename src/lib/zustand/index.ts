import { createStore } from "zustand/vanilla";

interface JWTState {
  jwt: string | undefined;
  updateToken: (token: string) => void;
}

export const useJWT = createStore<JWTState>()((set) => ({
  jwt: undefined,
  updateToken: (token) => set(() => ({ jwt: token })),
}));
