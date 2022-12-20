import { gsap, Power2, Sine } from "gsap";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { useGetElementProperty } from "../../hooks/useGetElementProperty";
import ScrollDown from "../Atoms/ScrollDown";
import Icon from "public/icon.svg";

import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const Top = () => {
  const targetRef = useRef(null);
  
  const { getElementProperty } =
  useGetElementProperty<HTMLDivElement>(targetRef);
  
  const tl = useRef<gsap.core.Timeline | null>(null);
  
  const { rive, RiveComponent } = useRive({
    src: "main9.riv",
    autoplay: true,
    layout: new Layout({
      alignment: Alignment.TopCenter,
    }),
  });
  
  //gsapの実行
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("h1", {
        opacity: 0,
      }),
        (tl.current = gsap.timeline()
        .to("#h1",
          {
            opacity: 1,
            stagger: {
              amount: 1,
              from: "start",
              ease: "sine.in",
            },
          },
          "-=0.1"
        ));
      // .to("#image",{
      //   opacity:0,
      // },'-=0.2')
    });

    return () => ctx.revert();
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );


  return (
    <div className="   ">
      {/* <ParticlesContainer /> */}

      <div className=" relative ">
        <div className=" text-white z-10 space-y-4 absolute top-44 right-64 ">
          <h1 id="h1" className="text-5xl  ">
            ワクワクを価値あるものに。
          </h1>
          <p id="text">
            ワクワクをカタチにするだけではなく、価値あるものにしていくクリエイトカンパニーです。
          </p>

          {/* High-speed homepage with no initial cost */}
        </div>

        {/* <div className=" h-[95vh]  w-full absolute -top-16 ">
          <RiveComponent />
        </div> */}

     

        <ScrollDown offset={800} />
      </div>

      {/* <span  ref={textRef} className={`absolute top-1/2 left-1/2 -translate-x-48 whitespace-nowrap overflow-hidden   text-black tracking-wider text-3xl font-semibold isLoading  ${isLoading && "animate-slide-width-right"} `}>成功するまで挑戦し続ける</span> */}
    </div>
  );
};

export default Top;
