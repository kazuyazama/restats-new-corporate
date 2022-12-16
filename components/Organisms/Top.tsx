import Image from "next/image";
import { useRef} from "react";
import { useGetElementProperty } from "../../hooks/useGetElementProperty";
import ScrollDown from "../Atoms/ScrollDown";


const Top = () => {
  const targetRef = useRef(null);
  const { getElementProperty }  = useGetElementProperty<HTMLDivElement>(targetRef);

  return (
    <div className=" max-w-screen-xl mx-auto " >
      <div className=" relative ">
        <div className=" text-white z-10 space-y-4 absolute  top-[50vh] -translate-y-full left-0 ">
          <h1 className="text-5xl">ワクワクを価値あるものに。</h1>
          <p>
            ワクワクをカタチにするだけではなく、価値あるものにしていくクリエイトカンパニーです。
          </p>

          {/* High-speed homepage with no initial cost */}
        </div>

        <div className=" absolute top-[50vh]  -translate-y-1/2 2xl:-translate-y-72 -right-1/4">
          <Image loader={({src}) => src} src="/topImage-skelton.png" width={900} height={700}   objectFit="contain" />
        </div>

        <ScrollDown />

       
      </div>

      {/* <span  ref={textRef} className={`absolute top-1/2 left-1/2 -translate-x-48 whitespace-nowrap overflow-hidden   text-black tracking-wider text-3xl font-semibold isLoading  ${isLoading && "animate-slide-width-right"} `}>成功するまで挑戦し続ける</span> */}
    </div>
  );
};

export default Top;
