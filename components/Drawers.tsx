import Image from "next/image";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import HamburgerMenu from "./Atoms/HamburgerMenu";
import MobileNav from "./Organisms/Navigation/MobileNav";

const Drawers = ({ isOpen, toggleDrawer, setIsOpen }) => {
  return (
    <>
      <header
        aria-label="Page Header "
        id="top"
        className="fixed w-full lg:static "
      >
        <div
          className="w-full  bg-transparent p-5 "
          // className={`w-full fixed z-30 mx-auto p-5 lg:p-8 ${
          //   isVisible && "bg-black opacity-50 "
          // }`}
        >
          <div className="flex items-center justify-between max-w-screen-xl mx-auto">
            <Link href="/" className=" lg:text-3xl cursor-pointer">
              <Image
                loader={({ src }) => src}
                src="/logos/restats_logo_only.webp"
                width={80}
                height={60}
                objectFit="contain"
              />
            </Link>
            <div className=" ">
              <HamburgerMenu
                toggleDrawer={toggleDrawer}
                isOpen={isOpen}
                controls="navigation"
              />
            </div>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="top"
              className="fixed"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#0c7eb4",
              }}
              customIdSuffix="customId"
            >
              <div id="navigation">
                <MobileNav setIsOpen={setIsOpen} />
              </div>
            </Drawer>
          </div>
        </div>
      </header>
  

            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="top"
              className="fixed"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#0c7eb4",
              }}
              customIdSuffix="customId"
            >
              <div id="navigation">
                <MobileNav setIsOpen={setIsOpen} />
              </div>
            </Drawer>

            
   
     
    </>
  );
};

export default Drawers;
