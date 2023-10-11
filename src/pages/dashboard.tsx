import { type NextPage } from "next";

import { TRANSACTION_TYPES } from "ripple-binary-codec/dist";
import sdk from "@crossmarkio/sdk";

import Screens from "../screens";

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
      <Screens />
    </div>
  );
};

export default Home;
