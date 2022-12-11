import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { Link as Scroll } from "react-scroll";

import { MdKeyboardArrowUp } from "react-icons/md";

const TopScroll = ({ showBelow }: { showBelow: number }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > showBelow) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  }, [handleScroll]);

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
