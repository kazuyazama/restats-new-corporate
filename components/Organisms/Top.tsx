import { gsap, Power2,  } from "gsap";
import { useCallback, useLayoutEffect, useRef } from "react";

import { useGetElementProperty } from "../../hooks/useGetElementProperty";
import ScrollDown from "../Atoms/ScrollDown";
import Icon from "public/icon.svg";

import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const Top = () => {
  const targetRef = useRef(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  // const { rive, RiveComponent } = useRive({
  //   src: "main9.riv",
  //   autoplay: true,
  //   layout: new Layout({
  //     alignment: Alignment.TopCenter,
  //   }),
  // });

  //gsapの実行
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("#h1", {
        autoAlpha: 0,
        y: 100,
      }),
        gsap.set("#p", {
          autoAlpha: 0,
          y: 100,
        }),
        gsap.set("#circle", {
          autoAlpha: 0,
          y: 100,
        }),
        (tl.current = gsap
          .timeline()
          .to("#h1", {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: Power2.easeOut,
            transformOrigin: "bottom",
          })
          .to(
            "#p",
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: Power2.easeOut,
            },
            "-=0.4"
          ));
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="   ">
      <div className=" relative ">
        <div className=" text-white z-10 space-y-4 absolute top-44 right-64 ">
          <h1 id="h1" className="text-5xl  ">
            ワクワクを価値あるものに。
          </h1>
          <p id="p">
            ワクワクをカタチにするだけではなく、価値あるものにしていくクリエイトカンパニーです。
          </p>

          {/* High-speed homepage with no initial cost */}
        </div>

        {/* <div className=" h-[95vh]  w-full absolute -top-16 ">
          <RiveComponent />
        </div> */}

        <ScrollDown offset={800} />
      </div>
    </div>
  );
};

export default Top;
