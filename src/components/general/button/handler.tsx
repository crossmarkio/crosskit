import React from "react";
import Arrow from "@icons/Arrows/chevron-right.svg";

interface Props {
  title: string;
  onClick: () => void;
}

const Handler = (props: Props) => (
  <button
    className="tw-relative tw-flex tw-w-full tw-shrink-0 tw-items-center tw-justify-center tw-overflow-hidden tw-truncate tw-whitespace-nowrap tw-rounded-md tw-border tw-border-br1 tw-bg-b1 tw-p-3 tw-px-4 tw-text-p12b tw-uppercase tw-leading-tight tw-text-t1"
    onClick={props.onClick}
  >
    <div className="tw-max-w-[300px] tw-overflow-hidden tw-truncate tw-px-5">
      {props.title}
    </div>
    <Arrow className="tw-absolute tw-right-4 tw-h-3 tw-stroke-t1 tw-stroke-2" />
  </button>
);

export default Handler;
