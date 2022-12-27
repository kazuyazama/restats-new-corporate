import React from "react";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import HamburgerMenu from "../../Atoms/HamburgerMenu";
import MobileNav from "./MobileNav";

type Props = {
  isOpen:boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDrawer:() => void;
  
};


const MobileDrawer = ({isOpen, setIsOpen, toggleDrawer}:Props) => {
  

  return (
    <>
      <div className="lg:hidden fixed top-1 right-1  z-[9999]">
        <HamburgerMenu toggleDrawer={toggleDrawer} isOpen={isOpen} controls="navigation" />
      </div>
      
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        className="fixed"
        style={{height:"100%",width:"100%",backgroundColor:"#0c7eb4"}}
        customIdSuffix="customId"

      >
        <div id="navigation" >
          <MobileNav setIsOpen={setIsOpen} />
        </div>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
