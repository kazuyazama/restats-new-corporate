import gsap, { Power2 } from "gsap";
import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

type Props = {
  isOpening: boolean;
  isOpeningText: boolean;
  // splitRef: RefObject<HTMLDivElement>;
};

const Opening = ({ isOpening, isOpeningText }: Props) => {

  // const tl = useRef<gsap.core.Timeline | null>(null)
  // ///文字列分割react ver

  // useEffect(() => {
  //   const wrapCharSpan = function (str) {
  //     return  [...str].map((char) => `<span>${char}</span>`).join("");
  //   };

  //   //textContentで要素所得
  //   const newSplit = splitRef.current?.textContent;
  //   //再度splitRefに代入
  //   splitRef.current!.innerHTML = wrapCharSpan(newSplit);
  
  // }, []);



  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[9999] bg-primary overflow-hidden  ${
        !isOpening && " animate-slide-trans-bottom "
      } `}
    >
      <div
        // id="h1"
        // ref={splitRef}
        className={` absolute top-1/2 z-[10000] left-1/2 -translate-x-1/2 -translate-y-1/2`}
        // className={`absolute top-1/2 left-1/2 -translate-y-1/2 [&>span]:inline-block [&>span]:opacity-0 [&>span]:whitespace-nowrap [&>span]:overflow-hidden   ${isOpeningText && "[&>span]:animate-slide-width-right"}`}
      >
        <h1 className={`whitespace-nowrap overflow-hidden text-secondary tracking-widest text-4xl lg:text-5xl font-semibold ${isOpeningText && "animate-slide-width-right"}`}>町田から世界へ</h1>
        
      </div>
    </div>
  );
};

export default Opening;
