import React, { useEffect, useRef, useState } from "react";
import { useStepContext } from "src/screens/router";
import { motion, LayoutGroup } from "framer-motion";

import Terminal from "@icons/Development/terminal.svg";
import Container from "@icons/Development/container.svg";
import Flow from "@icons/Development/dataflow-02.svg";
import Settings from "@icons/General/settings-02.svg";
import Plus from "@icons/General/plus.svg";
import Box from "@icons/Files/box.svg";

const Bar = () => {
  const stepContext = useStepContext();
  const [page, setPage] = stepContext.page;

  return (
    <>
      <div className="tw-relative tw-flex tw-w-[68px] tw-flex-shrink-0 tw-grow tw-flex-col tw-items-center tw-gap-12 tw-border-r tw-border-br1 tw-bg-b2 tw-py-8">
        <LayoutGroup>
          <div
            data-tooltip-id="home-tt"
            className="tw-relative hover:tw-cursor-pointer"
          >
            <Plus
              onClick={() => setPage("New")}
              className="tw-h-6 tw-w-6 tw-stroke-t1 tw-stroke-2"
            />
            {page === "New" && (
              <motion.div
                layoutId="underline"
                className="tw-absolute tw-right-[-14px] tw-top-0 tw-h-6 tw-rounded-full tw-border-r-4 tw-border-t1"
              ></motion.div>
            )}
          </div>
          <div
            data-tooltip-id="activity-tt"
            className="tw-relative hover:tw-cursor-pointer"
          >
            <Flow
              onClick={() => setPage("Bulk")}
              className="tw-h-6 tw-w-6 tw-rotate-180 tw-stroke-t1 tw-stroke-2"
            />
            {page === "Bulk" && (
              <motion.div
                layoutId="underline"
                className="tw-absolute tw-right-[-14px] tw-top-0 tw-h-6 tw-rounded-full tw-border-r-4 tw-border-t1"
              ></motion.div>
            )}
          </div>
          <div
            data-tooltip-id="apps-tt"
            className="tw-relative hover:tw-cursor-pointer"
          >
            <Terminal
              onClick={() => setPage("Logger")}
              className="tw-h-6 tw-w-6 tw-stroke-t1 tw-stroke-2"
            />
            {page === "Logger" && (
              <motion.div
                layoutId="underline"
                className="tw-absolute tw-right-[-14px] tw-top-0 tw-h-6 tw-rounded-full tw-border-r-4 tw-border-t1"
              ></motion.div>
            )}
          </div>
          <div
            data-tooltip-id="settings-tt"
            className="tw-relative hover:tw-cursor-pointer"
          >
            <Container
              onClick={() => setPage("Session")}
              className="tw-h-6 tw-w-6 tw-stroke-t1 tw-stroke-2"
            />
            {page === "Session" && (
              <motion.div
                layoutId="underline"
                className="tw-absolute tw-right-[-14px] tw-top-0 tw-h-6 tw-rounded-full tw-border-r-4 tw-border-t1"
              ></motion.div>
            )}
          </div>
          <div
            data-tooltip-id="settings-tt"
            className="tw-relative hover:tw-cursor-pointer"
          >
            <Box
              onClick={() => setPage("Helper")}
              className="tw-h-6 tw-w-6 tw-stroke-t1 tw-stroke-2"
            />
            {page === "Helper" && (
              <motion.div
                layoutId="underline"
                className="tw-absolute tw-right-[-14px] tw-top-0 tw-h-6 tw-rounded-full tw-border-r-4 tw-border-t1"
              ></motion.div>
            )}
          </div>
        </LayoutGroup>
      </div>
    </>
  );
};

export default Bar;
