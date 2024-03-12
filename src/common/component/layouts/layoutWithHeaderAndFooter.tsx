import classNames from "@/common/utils/classNames";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

export const LayoutWithHeaderAndFooter = ({
  children,
  shouldShowBrand = true,
  showHeader = true,
  showFooter = true,
}: {
  children: ReactNode;
  shouldShowBrand?: boolean;
  showHeader?: boolean;
  showFooter?: true;
}) => {
  return (
    <div className={classNames("min-h-screen flex flex-col")}>
      {showHeader && <Header shouldShowBrand={shouldShowBrand} />}
      <div className="flex flex-col flex-grow">{children}</div>
      {showFooter && <Footer />}
    </div>
  );
};
