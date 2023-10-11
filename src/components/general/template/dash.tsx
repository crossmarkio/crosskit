import React, { ReactNode } from "react";

import Image from "next/image";
import Image1 from "@assets/images/png/background-5.png";

import Header from "@components/general/header";
import Bar from "@components/general/nav";
import Sub from "@components/general/nav/sub";

interface Props {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const Dash = ({ children }: Props) => {
  return (
    <div className="dark tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-bg-gradient3 tw-font-montserrat">
      <Header />
      {/*       <Image
        src={Image1}
        alt=""
        className="tw-pointer-events-none tw-absolute tw-top-0 tw-z-0 tw-h-2/3 tw-w-full tw-overflow-hidden tw-object-cover tw-opacity-100"
      /> */}
      <div className="tw-flex tw-w-full tw-grow tw-overflow-hidden">
        <Bar />
        <Sub />
        {/*         <Scrollbars
          autoHide
          autoHideTimeout={1000}
          className="tw-h-full tw-grow tw-overflow-hidden tw-overflow-y-auto"
        >
          <div className="tw-z-10 tw-w-full tw-grow tw-px-12 tw-py-4"> */}
        <div className="tw-z-10 tw-w-full tw-grow tw-overflow-auto tw-overflow-x-hidden tw-px-12 tw-py-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dash;
