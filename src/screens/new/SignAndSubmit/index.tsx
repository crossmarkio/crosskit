import Input from "@/components/general/form/minimal";
import React, { useEffect, useState } from "react";

import Plus from "@icons/General/plus.svg";
import Minus from "@icons/General/minus.svg";

import TitleSection from "@components/general/title/section";

import sdk from "@crossmarkio/sdk";

/* import BN from "big.js"; */

const regex = /\,(?!\s*?[\{\[\"\'\w])/g;

interface Form {
  tx: { value: string };
}

const Index = () => {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let tx = JSON.parse(e.target["tx"].value.replace(regex, ""));
    await sdk.signAndSubmitAndWait(tx);
  };

  return (
    <form className="tw-relative tw-h-fit tw-w-full" onSubmit={handleSubmit}>
      <TitleSection title="new sign and submit" />
      <div className="tw-pb-16 tw-pt-3">
        <div className="tw-relative tw-h-fit tw-w-full">
          <Input title="input" id={"tx"} />
        </div>
      </div>
      <button
        className="tw-absolute tw-bottom-0 tw-right-0 tw-w-[200px] tw-rounded-md tw-border tw-border-br1 tw-bg-gradient1 tw-p-3 tw-text-sp12b tw-uppercase tw-text-t1
         disabled:tw-bg-none disabled:tw-text-t1"
        type="submit"
      >
        sign and submit
      </button>
    </form>
  );
};

export default Index;
