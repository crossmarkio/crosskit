import React from "react";
import Titleblock from "@/components/general/assets/images/png/titleblock.png";
import Icon from "@/components/general/assets/images/png/icon.png";
import Svg from "@/components/general/assets/images/svg/brand/CROSSMARK.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="tw-flex tw-w-full tw-justify-between tw-border-b tw-border-br1 tw-px-10 tw-py-3">
      <div className="tw-flex tw-items-center tw-justify-center tw-gap-2 max-xs:tw-hidden">
        <Image src={Icon} alt="" className="tw-h-7 tw-w-fit max-xs:tw-hidden" />
        <Image
          src={
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            Svg
          }
          alt=""
          className="tw-h-3 tw-w-fit max-sm:tw-hidden"
        />
      </div>
      <button className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-border tw-border-br1 tw-bg-b1 tw-p-3 tw-px-4 tw-text-p12b tw-uppercase tw-leading-tight tw-text-t1 max-xs:tw-w-full">
        connect wallet
      </button>
    </div>
  );
};

export default Header;
