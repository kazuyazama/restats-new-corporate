import React from "react";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import OpenMobileButton from "../../Atoms/OpenMobileButton";
import MobileNav from "./MobileNav";
import CloseMobileButton from "../../Atoms/CloseMobileButton";
import type { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi"


const DrawerNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <OpenMobileButton toggleDrawer={toggleDrawer} isOpen={isOpen} controls="navigation" />
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        className="opacity-80"
        style={{height:"100%",width:"100%",backgroundColor:"#0c7eb4"}}
        customIdSuffix="customId"

      >
        <div id="navigation" className=" text-gray-900 flex flex-col items-center justify-between">
          <div className="p-4 text-lg font-medium leading-6 flex justify-between items-center space-x-10">
          </div>
          <MobileNav setIsOpen={setIsOpen} />
        </div>
      </Drawer>
    </>
  );
};

export default DrawerNav;
