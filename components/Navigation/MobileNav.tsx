import React from "react";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FC } from "react";

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={toggleDrawer}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open
        </button>
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
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={toggleDrawer}
            >
              閉じる
            </button>
          </div>

          <nav className="mt-5 w-full">
            <ul className=" text-gray-500 leading-loose space-y-2 tracking-wider ">
              <li className="hover:bg-slate-300">
                <Scroll to="top" smooth={true} duration={600} offset={60}>
                  <span className="pl-4">TOP</span>
                </Scroll>
              </li>

              <li className="hover:bg-slate-300">
                <Scroll to="about" smooth={true} duration={600} offset={60}>
                  <span className="pl-4">ABOUT</span>
                </Scroll>
              </li>
              <li className="hover:bg-slate-300">
                <Scroll to="profile" smooth={true} duration={600} offset={60}>
                  <span className="pl-4">PROFILE</span>
                </Scroll>
              </li>
              <li className="hover:bg-slate-300">
                <Scroll to="works" smooth={true} duration={600} offset={60}>
                  <span className="pl-4">WORKS</span>
                </Scroll>
              </li>
              <li className="hover:bg-slate-300">
                <Scroll to="contact" smooth={true} duration={600} offset={60}>
                  <span className="pl-4">CONTCT</span>
                </Scroll>
              </li>
            </ul>
          </nav>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNav;
