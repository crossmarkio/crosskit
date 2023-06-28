import React, { useRef, useState } from "react";
import TitleSection from "@components/general/title/section";
import { toast } from "react-toastify";

type InputEvent = React.ChangeEvent<HTMLTextAreaElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

interface Form {
  tx: { value: string };
}

const regex = /\,(?!\s*?[\{\[\"\'\w])/g;

interface Props {
  title: string;
}

interface resp {
  createdAt: number;
  resolvedAt: number;
  response: {
    id: string;
    type: string;
    data: { isError?: boolean; isRejected?: boolean; address?: string };
  };
}

export const sign = async (tx: unknown) => {
  try {
    const promise = new Promise(async (resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      //eslint-disable-next-line
      const resp = (await window.crossmark.sign(tx)) as resp;
      console.log(resp);

      if (resp.response.data.isError || resp.response.data.isRejected) {
        reject(true);
        throw true;
      }
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

  return (
    <form
      className="tw-flex tw-w-full tw-flex-col tw-items-end tw-gap-3"
      onSubmit={handleSubmit}
    >
      <TitleSection title={props.title} />
      <textarea
        id="tx"
        name="tx"
        ref={inputRef}
        placeholder="ENTER TRANSACTION JSON"
        autoFocus={false}
        autoComplete="false"
        required
        onChange={handleChange}
        className="tw-h-fit tw-min-h-[200px] tw-w-full tw-appearance-none tw-rounded-md tw-border tw-border-br1 tw-bg-b1 tw-p-2 tw-text-c10 tw-text-t1 placeholder:tw-uppercase focus:tw-border focus:tw-border-br1 focus:tw-outline-none"
      />
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
