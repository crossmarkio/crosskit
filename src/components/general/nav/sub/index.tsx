import React, { useEffect, useRef, useState } from "react";
import { useStepContext } from "src/screens/router";
import { motion, LayoutGroup } from "framer-motion";

import Bulk from "./bulk";
import New from "./add";
import Helper from "./helper";
import Logger from "./logger";
import Session from "./session";

const Bar = () => {
  const stepContext = useStepContext();
  const [page, setPage] = stepContext.page;

  return (
    <>
      <div className="tw-relative tw-flex tw-w-fit tw-flex-shrink-0 tw-grow tw-flex-col tw-items-center tw-gap-12 tw-border-r tw-border-br1 tw-bg-b2 tw-px-4 tw-py-8 tw-text-t1">
        {page === "New" && <New />}
        {page === "Bulk" && <Bulk />}
        {page === "Logger" && <Logger />}
        {page === "Helper" && <Helper />}
        {page === "Session" && <Session />}
      </div>
    </>
  );
};

export default Bar;
