import React, { useEffect, useState } from "react";
import { useStoreContext } from "@/context";
import WalletIcon from "@icons/Finance/wallet-04.svg";
import { Truncate } from "@/common/utils/string";
import useSignIn from "@/components/hook/useSignIn";

const WalletButton = () => {
  const [isError, setIsError] = useState(false);
  const [address, setAddress] = useStoreContext().address;
  const signIn = useSignIn();

  const handleClick = async () => {
    try {
      const a = (await signIn()) as string;
      setAddress(a);
    } catch (e) {
      setIsError(true);
    }
  };

  const Button = () => {
    if (address)
      return (
        <button className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-gap-3 tw-whitespace-nowrap tw-rounded-md tw-border tw-border-br1 tw-bg-b1 tw-p-3 tw-px-4 tw-text-p12b tw-uppercase tw-leading-tight tw-text-t1">
          <WalletIcon className="tw-h-5 tw-w-5 tw-stroke-i1 tw-stroke-2" />
          {Truncate(address, 12)}
        </button>
      );

    return (
      <button
        className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-border tw-border-br1 tw-bg-b1 tw-p-3 tw-px-4 tw-text-p12b tw-uppercase tw-leading-tight tw-text-t1"
        onClick={handleClick}
      >
        connect wallet
      </button>
    );
  };

  return [Button, isError] as const;
};

export default WalletButton;
