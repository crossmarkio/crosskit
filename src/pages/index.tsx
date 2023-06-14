import { type NextPage } from "next";
import Image1 from "src/components/general/assets/images/png/background-5.png";
import Image from "next/image";
import Icon from "@/components/general/icon";
import Header from "@/components/general/header";
import { useEffect, useState } from "react";
import { useStoreContext } from "@/context";
import WalletButton, { signIn } from "@/components/general/button/wallet";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const Comp = WalletButton();

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<undefined | string>(undefined);
  const [address, setAddress] = useStoreContext().address;

  const handleClick = async () => {
    const a = (await signIn()) as string;
    setAddress(a);
  };

  useEffect(() => {
    setIsError(Comp[1]);
  }, [Comp[1]]);

  return (
    <div className="dark tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-bg-gradient3 tw-font-montserrat">
      <div className="tw-flex tw-h-2/3 tw-w-full tw-flex-col tw-border-b tw-border-br1">
        <Header setIsError={setIsError} />
        <div className="tw-relative tw-flex tw-grow tw-flex-col tw-items-center tw-justify-center">
          <Image
            src={Image1}
            alt=""
            className="tw-pointer-events-none tw-absolute tw-top-0 tw-z-0 tw-h-full tw-w-full tw-overflow-hidden tw-object-cover tw-opacity-100"
          />
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-4">
            <Icon
              className={
                "tw-h-32 tw-w-32 tw-rounded-xl tw-bg-gradient1 tw-p-7 max-lg:tw-h-24 max-lg:tw-w-24 max-lg:tw-p-4"
              }
            />
            <div className="tw-text-h1 tw-text-t1 max-lg:tw-text-h2">
              CROSSKIT
            </div>
          </div>
          <div className="tw-mt-10 tw-px-4 tw-text-center tw-text-h3 tw-text-t1 max-lg:tw-text-p16b">
            A SIMPLE TOOLKIT TO DEBUG CROSSMARK
          </div>
        </div>
      </div>

      {!isError && (
        <div className="tw-flex tw-grow tw-flex-col tw-items-center tw-justify-center tw-gap-10">
          <div className="tw-px-6 tw-text-center tw-text-p16b tw-text-t1 max-lg:tw-text-p14b">
            PLEASE SIGN IN TO GET STARTED ...
          </div>
          {Comp[0]()}
        </div>
      )}
      {isError && (
        <div className="tw-flex tw-grow tw-flex-col tw-items-center tw-justify-center tw-gap-10">
          <div className="tw-px-6 tw-text-center tw-text-p16b tw-text-t1 max-lg:tw-text-p14b">
            SOMETHING WENT WRONG ...
          </div>
          <a
            className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-whitespace-nowrap tw-text-p12b tw-uppercase tw-leading-tight tw-text-t1 hover:tw-cursor-pointer hover:tw-underline"
            onClick={handleClick}
          >
            TRY AGAIN
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
