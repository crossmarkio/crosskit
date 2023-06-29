import react, { useEffect, useState } from "react";
import useCrossmark from "./useCrossmark";
import { toast } from "react-toastify";
import useMobileDetect from "./useMobileDetect";

const useSignIn = () => {
  const detect = useMobileDetect();
  const crossmark = useCrossmark();
  const [errorMsg, setErrorMsg] = useState<string>();

  const signIn = async () => {
    try {
      const promise: Promise<string> = new Promise(async (resolve, reject) => {
        if (!detect.isDesktop()) {
          return reject("Crossmark only available on desktop");
        }
        if (!crossmark) return reject("Crossmark not found");

        const resp = await crossmark?.sign({
          TransactionType: "SignIn",
        });

        if (resp?.response.data?.isError || resp?.response.data?.isRejected)
          reject("SignIn rejected");
        resolve(resp?.response.data?.address as string);
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
