import { generateOpenApiDocument } from "trpc-openapi";
import { appRouter } from "./router/app.routes";
import { getBaseUrl } from "@/lib/helpers/url";

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "CROSSMARK CRUD API",
  description: "OpenAPI compliant REST API built using tRPC",
  version: "0.0.1",
  baseUrl: `${getBaseUrl()}/api/oapi`,
  tags: ["api"],
});
