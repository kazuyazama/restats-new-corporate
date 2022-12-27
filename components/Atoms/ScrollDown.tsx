import { useCallback } from "react";
import useScrollVisible from "../../hooks/useScrollVisible";

type Props = {
  scrollTarget:() => void;
  scrollTargetOffset:(offset:number) => void
}

const ScrollDown = ({scrollTarget,scrollTargetOffset}:Props) => {

  // const { handleClick } = useScrollVisible({offset}) 


  return (
   
      <a onClick={() => scrollTargetOffset(30)} className=" cursor-pointer  vertical-rl text-primary z-50 pb-2
      before:absolute before:h-12 before:left-5 before:bottom-0 
      before:w-[2px] before:bg-primary after:w-[2px] after:absolute
       after:h-4 after:left-[25px] after:top-[26px] after:-skew-x-[31deg]  after:bg-primary text-sm animate-bounce"
      >
      scroll

      </a>
  );
};

export default ScrollDown;
