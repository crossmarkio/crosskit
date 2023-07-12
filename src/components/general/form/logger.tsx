import React, { useEffect, useRef, useState } from "react";
import TitleSection from "@components/general/title/section";
import sdk from "@crossmarkio/sdk";
import { EVENTS } from "@/typings/extension";
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
    sdk?.on(EVENTS.PING, () => {
      handleUpdate(JSON.stringify(EVENTS.PING));
    });

    sdk?.on(EVENTS.USER_CHANGE, (user) => {
      console.log(user);
      handleUpdate(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        EVENTS.USER_CHANGE + "\r\n" + JSON.stringify(user)
      );
    });
    sdk?.on(EVENTS.NETWORK_CHANGE, (network) => {
      console.log(network);
      handleUpdate(EVENTS.NETWORK_CHANGE + "\r\n" + JSON.stringify(network));
    });
    sdk?.on(EVENTS.CLOSE, () => handleUpdate(JSON.stringify(EVENTS.CLOSE)));

    sdk?.on(EVENTS.SIGNOUT, () => handleUpdate(JSON.stringify(EVENTS.SIGNOUT)));

    sdk?.on(EVENTS.OPEN, () => handleUpdate(JSON.stringify(EVENTS.OPEN)));
  }, [sdk.mount.isMounted]);

  return (
    <form className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-end tw-gap-3">
      <TitleSection title={props.title} />
      <textarea
        id="tx"
        name="tx"
        ref={inputRef}
        placeholder="AWAITING EVENT FROM CROSSMARK?"
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
