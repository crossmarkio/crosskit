import React, { useEffect, useRef, useState } from "react";
import { useStepContext } from "src/screens/router";
import { motion, LayoutGroup } from "framer-motion";

import Terminal from "@icons/Development/terminal.svg";
import Container from "@icons/Development/container.svg";
import Flow from "@icons/Development/dataflow-02.svg";
import Settings from "@icons/General/settings-02.svg";
import Plus from "@icons/General/plus.svg";
import Box from "@icons/Files/box.svg";

const Index = () => {
  const stepContext = useStepContext();
  const [page, setPage] = stepContext.page;
  const [sub, SetSub] = stepContext.sub;

  return (
    <div className="tw-flex tw-flex-col tw-gap-6">
      <div
        data-tooltip-id="home-tt"
        className={`tw-relative tw-rounded-md  tw-p-3 hover:tw-cursor-pointer ${
          sub === "NewSign" && "tw-bg-tint"
        } `}
        onClick={() => SetSub("NewSign")}
      >
        {"Sign"}
      </div>
      <div
        data-tooltip-id="home-tt"
        className={`tw-relative tw-rounded-md  tw-p-3 hover:tw-cursor-pointer ${
          sub === "NewSubmit" && "tw-bg-tint"
        } `}
        onClick={() => SetSub("NewSubmit")}
      >
        {"Submit"}
      </div>
      <div
        className={`tw-relative tw-rounded-md  tw-p-3 hover:tw-cursor-pointer ${
          sub === "NewSignAndSubmit" && "tw-bg-tint"
        }`}
        onClick={() => SetSub("NewSignAndSubmit")}
      >
        {"SignAndSubmit"}
      </div>
    </div>
  );
};

export default Index;
