import React, { useRef, useState } from "react";
import TitleSection from "@components/general/title/section";
type InputEvent = React.ChangeEvent<HTMLTextAreaElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

interface Form {
  tx: { value: string };
}

const regex = /\,(?!\s*?[\{\[\"\'\w])/g;

interface Props {
  title: string;
}

const Input = (props: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isInput, setIsInput] = useState(false);

  const handleChange = (e: InputEvent) => {
    setIsInput(Boolean(e.target.value));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & Form;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const txjson = JSON.parse(target.tx.value.replace(regex, ""));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    //eslint-disable-next-line
    window.crossmark.sign(txjson);
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
