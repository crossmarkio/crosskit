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
  const [array, setArray] = useState([<Input title="bulk" id={"0-input"} />]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(e.target);

    let txns = array.map((_input, index) => {
      return JSON.parse(e.target[`${index}-input`].value.replace(regex, ""));
    });
    console.log(txns);

    await sdk.bulkSignAndSubmitAndWait(txns);
  };

  return (
    <form
      className="tw-relative tw-mb-20  tw-h-fit tw-w-full"
      onSubmit={handleSubmit}
    >
      <TitleSection title="bulk sign and submit" />
      <div className="tw-pb-16 tw-pt-3">
        {array.map((el) => (
          <div className="tw-relative tw-h-fit tw-w-full">{el}</div>
        ))}
      </div>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-flex tw-h-fit tw-w-fit tw-gap-3">
        <div
          className="tw-h-fit tw-w-fit tw-rounded-md tw-border tw-border-br1 tw-bg-b2 tw-p-2 tw-px-4 tw-text-sp12b tw-uppercase hover:tw-cursor-pointer hover:tw-bg-tint"
          onClick={() => {
            setArray((prev) => {
              let array = [...prev];
              let length = array.length;
              array.push(<Input title="bulk" id={`${length}-input`} />);
              return array;
            });
          }}
        >
          <Plus className="tw-h-6 tw-w-6 tw-stroke-t1 tw-stroke-2" />
        </div>
        {array.length > 1 && (
          <div
            className="tw-h-fit tw-w-fit tw-rounded-md tw-border tw-border-br1 tw-bg-b2 tw-p-2 tw-px-4 tw-text-sp12b tw-uppercase hover:tw-cursor-pointer hover:tw-bg-tint"
            onClick={() => {
              setArray((prev) => {
                let array = [...prev];
                array.pop();
                return array;
              });
            }}
          >
            <Minus className="tw-h-6 tw-w-6 tw-stroke-t1 tw-stroke-2" />
          </div>
        )}
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
