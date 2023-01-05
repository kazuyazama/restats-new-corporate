import React from "react";
import { animated, useSpring, useTrail } from "@react-spring/web";

const Top = () => {
  // const targetRef = useRef(null);

  // const tl = useRef<gsap.core.Timeline | null>(null);

  // const { rive, RiveComponent } = useRive({
  //   src: "main9.riv",
  //   autoplay: true,
  //   layout: new Layout({
  //     alignment: Alignment.TopCenter,
  //   }),
  // });

  //gsapの実行
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.set("#h1", {
  //       autoAlpha: 0,
  //       y: 100,
  //     }),
  //       gsap.set("#p", {
  //         autoAlpha: 0,
  //         y: 100,
  //       }),

  //       (tl.current = gsap
  //         .timeline()
  //         .to("#h1", {
  //           y: 0,
  //           autoAlpha: 1,
  //           duration: 0.8,
  //           ease: Power2.easeOut,
  //           transformOrigin: "bottom",
  //         })
  //         .to(
  //           "#p",
  //           {
  //             y: 0,
  //             autoAlpha: 1,
  //             duration: 0.8,
  //             ease: Power2.easeOut,
  //           },
  //           "-=0.4"
  //         ));
  //   });

  //   return () => ctx.revert();
  // }, []);


  //react-spring の設定

  // const [open, set] = useState(true);

  const trails = useTrail(1, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

 

  return (
    <div className="px-5 ">
      <div className=" relative max-w-screen-xl mx-auto">
        <div className="pt-28 lg:pt-40 grid place-items-center  text-white z-10 space-y-4 ">
          {/* <h1 id="h1" className="text-3xl lg:text-5xl ">
            ワクワクを価値あるものに。
          </h1> */}
          {/* <p id="p" className="text-lg">
            ワクワクをカタチにするだけではなく、価値あるものにしていくクリエイトカンパニーです。
          </p> */}
          {trails.map((props,index) => (
            <animated.div
              key={index}
              className="absolute w-full font-Allura left-4 lg:left-72  top-40 lg:top-80 text-6xl lg:text-7xl"
              style={props}
            >
              From Machida to the World
            </animated.div>
          ))}
        

          {/* <div className="absolute w-full font-Allura left-4 lg:left-72  top-40 lg:top-80 text-6xl lg:text-7xl ">From Machida to the World</div> */}
        </div>

        {/* <div className=" h-[95vh]  w-full absolute -top-16 ">
          <RiveComponent />
        </div> */}
      </div>
    </div>
  );
};

export default Top;
