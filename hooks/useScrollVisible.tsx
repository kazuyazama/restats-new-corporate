import { useCallback, useEffect, useState } from "react";

type Props = {
  showBelow?:number;
  offset:number;
}

const useScrollVisible = ({showBelow = 0 ,offset}:Props) => {

  const [show, setShow] = useState(showBelow ? false : true);
  
  const handleScroll = useCallback(() => {
    if (window.pageYOffset > showBelow) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [showBelow]);

  const handleClick = () => {
    window[`scrollTo`]({ top: offset, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  }, [showBelow,handleScroll]);

  return {
    show,handleClick
  }

}

export default useScrollVisible;