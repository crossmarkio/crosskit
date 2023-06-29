import React, { Dispatch, SetStateAction, useEffect } from "react";
import Titleblock from "@/components/general/assets/images/png/titleblock.png";
import Icon from "@/components/general/assets/images/png/icon.png";
import Svg from "@/components/general/assets/images/svg/brand/crossmark.svg";
import Image from "next/image";

import WalletButton from "@/components/general/button/wallet";

interface Props {
  setIsError?: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: Props) => {
  const [Button, isError] = WalletButton();

  useEffect(() => {
    if (props.setIsError) props.setIsError(isError);
  }, [isError]);

  return (
    <div className="tw-z-10 tw-flex tw-h-[70px] tw-w-full tw-justify-between tw-border-b tw-border-br1 tw-bg-b2 tw-px-10 tw-py-3">
      <div className="tw-flex tw-items-center tw-justify-center tw-gap-2 max-xs:tw-hidden">
        <Image src={Icon} alt="" className="tw-h-7 tw-w-fit max-xs:tw-hidden" />
        <Svg className="tw-h-3 tw-w-fit max-sm:tw-hidden" />
      </div>
      <Button />
    </div>
  );
};

export default Header;
