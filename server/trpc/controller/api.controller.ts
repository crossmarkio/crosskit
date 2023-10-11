import { z } from "zod";
import { TRPCError } from "@trpc/server";
import config from "config";
import jwt from "jsonwebtoken";
import {
  publicProcedure,
  protectedApiProcedure,
  protectedJwtProcedure,
} from "../router/router";
import {
  metaInit,
  metaAddToNewsletter,
  metaAddToBeta,
  metaGetTxnsTypes,
} from "../meta/api";
import {
  addToBetaSchema,
  addToNewsletterOutputSchema,
  addToNewsletterSchema,
  addToBetaOutputSchema,
  getTxnsTypesOutputSchema,
  getTxnSampleOutputSchema,
  getTxnSampleInputSchema,
} from "../schema/api.schema";

import fs from "fs";

const getDirectories = (source: string) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const getFiles = (source: string) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

const init = protectedApiProcedure
  .meta(metaInit)
  .input(z.void())
  .output(z.string())
  .query(async ({ ctx }) => {
    let secret = config.api.secret;
    if (!secret)
      throw new TRPCError({
        message: "API Secret not found",
        code: "NOT_FOUND",
      });

    return jwt.sign(
      {
        app: ctx.req.authHeaders?.headers["X-API-Key"],
      },
      secret,
      { expiresIn: "4h" }
    );
  });

const getTxnTypes = publicProcedure
  .meta(metaGetTxnsTypes)
  .input(z.void())
  .output(getTxnsTypesOutputSchema)
  .query(() => {
    let types = getFiles("server/data/txns").map((type) => type.split(".")[0]);
    return { types };
  });

const getTxnSample = publicProcedure
  .meta(metaGetTxnsTypes)
  .input(getTxnSampleInputSchema)
  .output(getTxnSampleOutputSchema)
  .query(async ({ input }) => {
    if (!input.type) return {};
    let sample = fs
      .readFileSync(`server/data/txns/${input.type}.json`)
      .toString();
    return { sample };
  });

export default { init, getTxnTypes, getTxnSample };
