import { useCallback } from "react";
import useScrollVisible from "../../hooks/useScrollVisible";

type Props = {
  // scrollTarget:() => void;
  scrollTargetOffset: (offset: number) => void;
};

const ScrollDown = ({ scrollTargetOffset }: Props) => {
  // const { handleClick } = useScrollVisible({offset})

  return (
    <a
      onClick={() => scrollTargetOffset(30)}
      className=" z-50  cursor-pointer pb-2 text-sm text-primary
      animate-bounce vertical-rl before:absolute before:left-5 
      before:bottom-0 before:h-12 before:w-[2px] before:bg-primary
       after:absolute after:left-[25px] after:top-[26px] after:h-4  after:w-[2px] after:-skew-x-[31deg] after:bg-primary"
    >
      scroll
    </a>
  );
};

export default ScrollDown;
