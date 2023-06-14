import React from "react";

interface Props {
  title: string;
}

const Section = (props: Props) => {
  return (
    <div className="tw-h-fit tw-w-full tw-border-b tw-border-t3 tw-p-3 tw-text-h3 tw-uppercase tw-text-t1">
      {props.title}
    </div>
  );
};

export default Section;
