import React, { useState } from "react";
import { useStoreContext } from "@/context";

import WalletIcon from "@icons/Finance/wallet-04.svg";
import { Truncate } from "@/common/utils/string";

import { toast } from "react-toastify";

interface resp {
  data: {
    isError?: boolean;
    isRejected?: boolean;
    address?: string;
  };
}

export const signIn = async () => {
  try {
    const promise = new Promise(async (resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      //eslint-disable-next-line
      const resp = (await window.crossmark.sign({
        TransactionType: "SignIn",
      })) as resp;
      if (resp.data.isError || resp.data.isRejected) {
        reject(true);
        throw true;
      }
      resolve(resp.data.address as string);
    });

    void toast.promise(
      promise,
      {
        pending: "Awaiting Crossmark",
        success: "SignIn Complete",
        error: "SignIn Rejected",
      },
      {
        position: "bottom-right",
        autoClose: 2000,
        theme: "dark",
      }
    );

    return promise;
  } catch (e) {
    throw e;
  }
};

const WalletButton = () => {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<undefined | string>(undefined);

  const [address, setAddress] = useStoreContext().address;

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
