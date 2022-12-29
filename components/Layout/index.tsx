import { ReactElement, useState } from "react";
import "react-modern-drawer/dist/index.css";
import Header from "./Header";
import Footer from "./Footer";
import TopScroll from "../Organisms/TopScroll";
import MobileDrawer from "../Organisms/MobileDrawer";

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
