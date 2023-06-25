import { type NextPage } from "next";
import Image1 from "src/components/general/assets/images/png/background-5.png";
import Image from "next/image";
import Icon from "@/components/general/icon";
import Header from "@/components/general/header";
import { useEffect, useState } from "react";
import { useStoreContext } from "@/context";
import WalletButton, { signIn } from "@/components/general/button/wallet";
import Handler from "@/components/general/button/handler";
import Input from "@/components/general/form";

import { useRouter } from "next/router";

import TitleSection from "@components/general/title/section";
import { TRANSACTION_TYPES } from "ripple-binary-codec/dist";
import Logger from "@/components/general/form/logger";

const parseTypes = () => [
  ...TRANSACTION_TYPES,
  "XChainCreateBridge",
  "XChainModifyBridge",
  "XChainCreateClaimID",
  "XChainCommit",
  "XChainAddClaimAttestation",
  "XChainClaim",
  "XChainAccountCreateCommit",
  "XChainAddAccountCreateAttestation",
  "AMMCreate",
  "AMMDeposit",
  "AMMWithdraw",
  "AMMVote",
];

const helpers = parseTypes().map((type) => {
  return {
    title: type,
    onClick: () => {
      null;
    },
  };
});

const Home: NextPage = () => {
  return (
    <div className="dark tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-bg-gradient3 tw-font-montserrat">
      <Header />
      <Image
        src={Image1}
        alt=""
        className="tw-pointer-events-none tw-absolute tw-top-0 tw-z-0 tw-h-2/3 tw-w-full tw-overflow-hidden tw-object-cover tw-opacity-100"
      />
      <div className="tw-z-10 tw-flex tw-w-full tw-grow tw-flex-col tw-overflow-hidden tw-px-16 tw-pb-16">
        <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-py-4">
          <div className="tw-text-h1 tw-text-t1 max-lg:tw-text-h2">
            CROSSKIT
          </div>
          <div className="tw-mt-4 tw-px-4 tw-text-center tw-text-h3 tw-text-t1 max-lg:tw-text-p16b">
            A SIMPLE TOOLKIT TO DEBUG CROSSMARK
          </div>
        </div>
        <div className="tw-flex tw-grow tw-gap-5 tw-overflow-hidden max-md:tw-flex-col max-md:tw-overflow-y-scroll ">
          <div className="tw-flex tw-grow tw-flex-col tw-items-end tw-gap-4">
            <Input title={"user input"} />
            <div className="tw-flex tw-w-full tw-grow tw-flex-col tw-gap-3">
              <Logger title={"logger"} />
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-4">
            <TitleSection title={"helpers"} />
            <div className="tw-flex tw-w-full tw-flex-col tw-gap-2 tw-overflow-y-scroll max-md:tw-overflow-auto ">
              {helpers.map((obj, index) => (
                <Handler key={index} title={obj.title} onClick={obj.onClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
