import StoreProvider from "@/context";
import { type AppType } from "next/dist/shared/lib/utils";
import { Children, useEffect } from "react";
import "../styles/globals.scss";
import { useStoreContext } from "@/context";
import WalletButton, { signIn } from "@/components/general/button/wallet";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const Nav = ({ children }: Props) => {
  const router = useRouter();

  const [address, setAddress] = useStoreContext().address;

  useEffect(() => {
    if (address) void router.push("home");
    if (!address) void router.push("/");
  }, [address]);

  return <>{children}</>;
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Nav>
        <Component {...pageProps} />;
        <ToastContainer />
      </Nav>
    </StoreProvider>
  );
};

export default MyApp;
