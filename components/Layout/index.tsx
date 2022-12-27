import Header from "./Header";
import Footer from "./Footer";
import TopScroll from "../Organisms/TopScroll";
import { ReactElement, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import HamburgerMenu from "../Atoms/HamburgerMenu";
import Drawers from "../Drawers";
import MobileNav from "../Organisms/Navigation/MobileNav";
import MobileDrawer from "../Organisms/Navigation/MobileDrawer";
import { useRouter } from "next/router";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

 


  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <MobileDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleDrawer={toggleDrawer}
      />

      <Header showBelow={620} offset={0} />
      <main>{children}</main>
      <Footer />
      <TopScroll showBelow={620} offset={0} />
    </>
  );
};

export default Layout;
