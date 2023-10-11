import apiController from "../controller/api.controller";
import { t } from "./router";

export const apiRouter = t.router({
  init: apiController.init,
  getTxnTypes: apiController.getTxnTypes,
  getTxnSample: apiController.getTxnSample,
});

export type ApiRouter = typeof apiRouter;
