import StoreProvider from "@/context";
import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect } from "react";

import "../styles/globals.scss";
import { useStoreContext } from "@/context";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { api } from "src/lib/trpc";

import { useRouter } from "next/router";

import Head from "next/head";
import Script from "next/script";

interface Props {
  children: React.ReactNode;
}

const Nav = ({ children }: Props) => {
  const router = useRouter();
  const repo = useStoreContext().repo;

  const handleUpdate = () => {
    if (repo?.General.getAddress()) void router.push("dashboard");
    if (!repo?.General.getAddress()) void router.push("/");
  };

  useEffect(() => {
    handleUpdate();

    repo.General.on("generalUpdate", handleUpdate);
    return () => {
      repo.General.removeListener("generalUpdate", handleUpdate);
    };
  }, []);

  return <>{children}</>;
};

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Nav>
          <Component {...pageProps} />
          <ToastContainer />
        </Nav>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default api.withTRPC(MyApp);
