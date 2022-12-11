import Header from "./Header";
import Footer from "./Footer";
import TopScroll from "../Organisms/TopScroll";
import { ReactElement } from "react";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <TopScroll showBelow={620} />
    </>
  );
};

export default Layout;
