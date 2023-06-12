import React from "react";
import Titleblock from "@/components/general/assets/images/png/titleblock.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="tw-flex tw-w-full tw-justify-between tw-px-10 tw-py-5">
      <Image src={Titleblock} alt="" className="tw-h-12 tw-w-fit" />
      <button className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-border tw-border-br1 tw-p-3 tw-text-p12b tw-uppercase tw-leading-tight tw-text-t1">
        connect wallet
      </button>
    </div>
  );
};

export default Header;
