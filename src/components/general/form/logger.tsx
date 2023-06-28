import React, { useEffect, useRef, useState } from "react";
import TitleSection from "@components/general/title/section";
type InputEvent = React.ChangeEvent<HTMLTextAreaElement>;

interface Props {
  title: string;
}

const Logger = (props: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isInput, setIsInput] = useState(false);

  const handleChange = (e: InputEvent) => {
    setIsInput(Boolean(e.target.value));
  };

  const handleUpdate = (e: string) => {
    if (!inputRef.current) return;
    const formated = `${Date.now().toString()}: ${e}`;
    const value = inputRef.current?.value;
    if (!value) return (inputRef.current.value = formated);
    inputRef.current.value = value + "\r\n" + formated;
    inputRef.current.scrollTo(0, inputRef.current.scrollHeight);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    //eslint-disable-next-line
    if (window.crossmark) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      //eslint-disable-next-line
      window.crossmark.on("ping", () => {
        console.log("ping");
        handleUpdate(JSON.stringify("ping"));
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      //eslint-disable-next-line
      window.crossmark.on("user-change", (user: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log(user?.user?.user.profile);
        handleUpdate(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          "user-change" + "\r\n" + JSON.stringify(user?.user?.user.profile)
        );
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      //eslint-disable-next-line
      window.crossmark.on("network-change", (network: any) => {
        console.log(network);
        handleUpdate("network-change" + "\r\n" + JSON.stringify(network));
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      //eslint-disable-next-line
      window.crossmark.on("close", () => handleUpdate(JSON.stringify("close")));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      //eslint-disable-next-line
      window.crossmark.on("open", () => handleUpdate(JSON.stringify("open")));
    }
  }, []);

  return (
    <form className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-end tw-gap-3">
      <TitleSection title={props.title} />
      <textarea
        id="tx"
        name="tx"
        ref={inputRef}
        placeholder="AWAITING EVENT FROM CROSSMARK"
        autoFocus={false}
        autoComplete="false"
        required
        contentEditable="false"
        onChange={handleChange}
        className="tw-h-full tw-min-h-[200px] tw-w-full tw-grow tw-appearance-none tw-rounded-md tw-border tw-border-br1 tw-bg-b1 tw-p-2 tw-text-c10 tw-text-t1 placeholder:tw-uppercase focus:tw-border focus:tw-border-br1 focus:tw-outline-none"
      />
    </form>
  );
};

export default Logger;
