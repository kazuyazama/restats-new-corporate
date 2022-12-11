import Image from "next/image";
import { useRef } from "react";
import { useGetElementProperty } from "../../hooks/useGetElementProperty";
import ScrollDown from "../Atoms/ScrollDown";


const Top = () => {
  const targetRef = useRef(null);
  const { getElementProperty }  = useGetElementProperty<HTMLDivElement>(targetRef);
  return (
    <div className="h-[50vh] md:h-[100vh] bg-primary " >
      <div className="relative h-full w-full  ">
        <div className="text-white z-10 space-y-4 absolute top-1/2 left-32">
          <h1 className="text-5xl">ワクワクを価値あるものに。</h1>
          <p>
            ワクワクをカタチにするだけではなく、価値あるものにしていくクリエイトカンパニーです。
          </p>

          {/* High-speed homepage with no initial cost */}
        </div>

        <div className="absolute right-10 top-32 ">
          <Image src="/topImage-skelton.png" width={900} height={700} />
        </div>

        <ScrollDown />
      </div>

      {/* <span  ref={textRef} className={`absolute top-1/2 left-1/2 -translate-x-48 whitespace-nowrap overflow-hidden   text-black tracking-wider text-3xl font-semibold isLoading  ${isLoading && "animate-slide-width-right"} `}>成功するまで挑戦し続ける</span> */}
    </div>
  );
};

export default Top;
