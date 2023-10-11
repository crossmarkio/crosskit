import type { AppRouter } from "server/trpc/router/app.routes";
import { loggerLink } from "@trpc/client/links/loggerLink";

import { getFetch, httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

import { getBaseUrl } from "../helpers/url";
import superjson from "superjson";
import { Context } from "server/trpc/context";
import { NextPageContext } from "next/types";
import { useJWT } from "../zustand";

export let apiKey: string = process.env.NEXT_PUBLIC_API_KEY || "";

export const api = createTRPCNext<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;
    return {
      url,
      transformer: superjson,
      //queryClientConfig: { defaultOptions: { queries: { staleTime: 20 * 1000 } } },
      links: [
        loggerLink({
          enabled: (opts) =>
            (process.env.NODE_ENV === "development" &&
              typeof window !== "undefined") ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            return {
              ...ctx?.req?.headers,
              "x-api-key": apiKey,
              Authorization: useJWT.getState().jwt,
            };
          },
        }),
      ],
    };
  },
  ssr: false,
});
