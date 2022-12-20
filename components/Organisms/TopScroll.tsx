import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

import { MdKeyboardArrowUp } from "react-icons/md";
import useScrollVisible from "../../hooks/useScrollVisible";

type Props = {
  showBelow:number;
  offset:number;
}


const TopScroll = ({ showBelow,offset }:Props) => {

  const {show,handleClick} = useScrollVisible({showBelow,offset})


  return (
    <>
      {/* <Scroll to="top" smooth={true} duration={600}> */}
      {show && (
        <button
          onClick={handleClick}
          className="fixed bottom-7 right-7 p-3 bg-neutral rounded-full delay-100"
        >
          <MdKeyboardArrowUp size={25} className="" />
        </button>
      )}
      {/* </Scroll> */}
    </>
  );
};

export default TopScroll;
