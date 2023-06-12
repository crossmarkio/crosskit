import { type NextPage } from "next";
import Image1 from "src/components/general/assets/images/png/background-5.png";
import Image from "next/image";
import Icon from "@/components/general/icon";
import Header from "@/components/general/header";

const Home: NextPage = () => {
  return (
    <div className="dark tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-bg-gradient3 tw-font-montserrat">
      <Image
        src={Image1}
        alt=""
        className="tw-pointer-events-none tw-absolute tw-top-0 tw-z-0 tw-h-2/3 tw-w-full tw-overflow-hidden tw-object-cover tw-opacity-100"
      />
      <div className="tw-flex tw-h-2/3 tw-w-full tw-flex-col">
        <Header />
        <div className="tw-flex tw-grow tw-flex-col tw-items-center tw-justify-center">
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-4">
            <Icon
              className={"tw-h-32 tw-w-32 tw-rounded-xl tw-bg-gradient1 tw-p-7"}
            />
            <div className="tw-text-h1 tw-text-t1">CROSSKIT</div>
          </div>
          <div className="tw-mt-10 tw-text-center tw-text-h3 tw-text-t1">
            A SIMPLE TOOLKIT TO DEBUG CROSSMARK
          </div>
        </div>
      </div>

      <div className="tw-flex tw-grow tw-flex-col tw-items-center tw-justify-center tw-gap-10">
        <div className="tw-text-p16b tw-text-t1">
          PLEASE SIGN IN TO GET STARTED ...
        </div>
        <button className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-border tw-border-br1 tw-p-3 tw-text-p12b tw-uppercase tw-leading-tight tw-text-t1">
          connect wallet
        </button>
      </div>
    </div>
  );
};

export default Home;
