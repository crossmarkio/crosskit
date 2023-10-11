/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import react, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useMobileDetect from "./useMobileDetect";
import sdk from "@crossmarkio/sdk";
import { toHex } from "@/common/helpers/hexConversion";

/* const sdk = require("@crossmarkio/sdk@0.2.5-beta"); */

const useSignIn = () => {
  const detect = useMobileDetect();
  const [errorMsg, setErrorMsg] = useState<string>();

  const signIn = async () => {
    try {
      const promise: Promise<string> = new Promise(async (resolve, reject) => {
        if (!detect.isDesktop()) {
          return reject("Crossmark only available on desktop");
        }

        const resp = await sdk.signInAndWait(
          toHex("this is my private message")
        );

        if (!resp.response.data.address || resp?.response.data.meta.isRejected)
          reject("SignIn rejected");
        resolve(resp.response.data.address);
      });

      void toast.promise(
        promise,
        {
          pending: "Awaiting Crossmark",
          success: "SignIn Complete",
          error: {
            render({ data }) {
              // When the promise reject, data will contains the error
              return <div>{data as string}</div>;
            },
          },
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

  return signIn;
};

export default useSignIn;
