import { OpenApiMeta } from "trpc-openapi";

const route = "api";

export const metaAddToBeta: OpenApiMeta = {
  openapi: {
    enabled: true,
    method: "POST",
    path: `/${route}/addToBeta`,
    tags: ["api"],
    summary: "Add app to beta program",
  },
};

export const metaAddToNewsletter: OpenApiMeta = {
  openapi: {
    enabled: true,
    method: "POST",
    path: `/${route}/addToNewsletter`,
    tags: ["api"],
    summary: "Add email to newsletter",
  },
};

export const metaInit: OpenApiMeta = {
  openapi: {
    enabled: true,
    method: "GET",
    path: `/${route}/init`,
    tags: ["api"],
    summary: "Init api with credientials",
  },
};

export const metaGetTxnsTypes: OpenApiMeta = {
  openapi: {
    enabled: true,
    method: "GET",
    path: `/${route}/getTxnTypes`,
    tags: ["api"],
    summary: "Get transaction types",
  },
};

