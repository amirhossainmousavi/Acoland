import Provider from "@/common/component/layouts/provider";
import { useNetworkStatus } from "@/common/hooks/useNetworkStatus";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Vazirmatn } from "next/font/google";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: "500",
  display: "swap",
  style: ["normal"],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useNetworkStatus();
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <style jsx global>{`
        :root {
          font-family: ${vazirmatn.style.fontFamily};
        }
      `}</style>
      <Provider>{getLayout(<Component {...pageProps} />)}</Provider>
    </>
  );
}
