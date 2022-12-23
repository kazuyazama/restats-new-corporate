import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import DrawerMenu from "../DrawerMenu";

const BurgerMenu = () => {

    const [show,setShow] = useState(false)

    const [menu,setMenu] = useState() 

   

    const handleToggle = () => {
       setShow(prev => !prev)
    }

    

  

  return (
    <>
      <div className="test">
        <button className="relative group ">
          <div onClick={handleToggle} className="relative  flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-white-700  ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${show === true && "group-focus:rotate-[42deg]"}`}></div>
              <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300  ${show === true && "group-focus:-translate-x-10"}`}></div>
              <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${show === true && "group-focus:rotate-[-42deg]"}`}></div>

            </div>
          </div>
        </button>
      </div>

    </>
  );
};

export default BurgerMenu;
