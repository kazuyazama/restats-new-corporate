import React from "react";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import OpenMobileButton from "../../Atoms/OpenMobileButton";
import MobileNav from "./MobileNav";
import CloseMobileButton from "../../Atoms/CloseMobileButton";
import type { FC } from "react";

const DrawerNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <OpenMobileButton toggleDrawer={toggleDrawer}>Open</OpenMobileButton>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="rounded-l rounded-lg"
        size={220}
        customIdSuffix="customId"
      >
        <div className=" text-gray-900 flex flex-col items-center justify-between">
          <div className="p-4 text-lg font-medium leading-6 flex justify-between items-center space-x-10">
            <h1>メニュー</h1>
            <CloseMobileButton toggleDrawer={toggleDrawer} />
          </div>
          <MobileNav />
        </div>
      </Drawer>
    </>
  );
};

export default DrawerNav;
