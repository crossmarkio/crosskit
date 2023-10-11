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
  const f = async () => {
    const r = await sdk.bulkSignAndSubmitAndWait([
      {
        TransactionType: "NFTokenMint",
        Account: "rUaW6fDAET916sWN43qUKeHG3FXtwGSrTa",
        TransferFee: 314,
        NFTokenTaxon: 0,
        Flags: 8,
        URI: "697066733A2F2F6261667962656965776D77686F68657868617A75696A626179687133356E6832626D757A3435786F736B3365783377743272716B6A6E6C6C7A69342F312E6A736F6E",
      },
    ]);
    console.log(r);
  };

  return (
    <div className="dark tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-bg-gradient3 tw-font-montserrat">
      <Screens />
    </div>
  );
};

export default Home;
