import React, { useContext, useEffect, useRef, useState } from "react";
import TitleSection from "@components/general/title/section";
import { toast } from "react-toastify";
import type { Transaction } from "xrpl";
import sdk from "@crossmarkio/sdk";

import { api } from "@/lib/trpc";
import { useStoreContext } from "@/context";

type InputEvent = React.ChangeEvent<HTMLTextAreaElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

interface Form {
  tx: { value: string };
}

const regex = /\,(?!\s*?[\{\[\"\'\w])/g;

interface Props {
  title: string;
  submit?: boolean;
}

export const sign = async (tx: unknown) => {
  try {
    const promise = new Promise(async (resolve, reject) => {
      const resp = await sdk.signAndSubmitAndWait(tx as Transaction);
      console.log(resp);
      if (
        resp?.response?.data?.meta.isError ||
        resp?.response?.data?.meta.isRejected
      ) {
        reject(true);
        throw true;
      }
      console.log(resp.response.data);
      resolve(resp.response.data);
    });

    void toast.promise(
      promise,
      {
        pending: "Awaiting Crossmark",
        success: "Tx Complete",
        error: "Tx Rejected",
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

const Input = (props: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isInput, setIsInput] = useState(false);
  const [type, setType] = useState<string | undefined>(undefined);

  const types = api.api.getTxnTypes.useQuery().data?.types;
  const sample = api.api.getTxnSample.useQuery({ type }).data?.sample;

  const repo = useStoreContext().repo;

  const handledSample =
    sample &&
    JSON.stringify(
      Object.assign({}, JSON.parse(sample), {
        Account: repo.General.getAddress(),
      }),
      null,
      4
    );

  const handleChange = (e: InputEvent) => {
    setIsInput(Boolean(e.target.value));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & Form;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const txjson = JSON.parse(target.tx.value.replace(regex, ""));
    await sign(txjson);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    setIsInput(true);
  };

  useEffect(() => {
    if (inputRef.current && sample)
      inputRef.current.value = JSON.stringify(
        Object.assign({}, JSON.parse(sample), {
          Account: repo.General.getAddress(),
        }),
        null,
        4
      );
  }, [sample]);

  return (
    <form
      className="tw-relative tw-flex tw-w-full tw-flex-col tw-items-end tw-gap-3"
      onSubmit={handleSubmit}
    >
      <TitleSection title={props.title} />
      <div className="tw-relative tw-h-fit tw-w-full">
        {!props.submit && (
          <select
            className="tw-absolute tw-right-0 tw-top-0 tw-rounded-bl-md tw-rounded-tr-md tw-border tw-border-br1 tw-bg-tint tw-px-2 tw-py-3 tw-text-t1 focus:tw-border-br1 focus:tw-outline-none"
            name=""
            id=""
            onChange={handleSelectChange}
          >
            {types &&
              types?.length > 0 &&
              ["-", ...types].map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
          </select>
        )}
        <textarea
          id="tx"
          name="tx"
          ref={inputRef}
          placeholder={
            !props.submit ? "ENTER TRANSACTION JSON" : "ENTER TX BLOB"
          }
          autoFocus={false}
          autoComplete="false"
          required
          onChange={handleChange}
          className={`tw-h-fit tw-w-full tw-appearance-none tw-rounded-md tw-border tw-border-br1 tw-bg-b1 tw-p-2 tw-text-p12 tw-text-t1 placeholder:tw-uppercase focus:tw-border focus:tw-border-br1 focus:tw-outline-none ${
            props.submit && " tw-resize-none"
          } ${!props.submit && " tw-min-h-[200px]"}`}
        />
      </div>
      <button
        className="tw-w-[200px] tw-rounded-md tw-border tw-border-br1 tw-bg-gradient1 tw-p-3 tw-text-sp12b tw-uppercase tw-text-t1
         disabled:tw-bg-none disabled:tw-text-t1"
        type="submit"
        disabled={!isInput}
      >
        submit
      </button>
    </form>
  );
};

export default Input;
