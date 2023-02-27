import { Canvas } from "@react-three/fiber";
import { Html, Loader, useProgress } from "@react-three/drei";
import dynamic from "next/dynamic";

// function Loader() {
//   const { active, progress, errors, item, loaded, total } = useProgress()
//   return <Html center>{progress} % Loading...</Html>
// }

const DynamicEarth = dynamic(() => import("../Organisms/Earth"), {
  loading: () => <Html>Loading...</Html>,
});

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

  return (
    <div className="px-5 ">
      <div className=" relative mx-auto max-w-screen-xl">
        <div className="z-10 grid place-items-center space-y-4  pt-28 text-white lg:pt-40 ">
          <div className=" relative  z-50 w-full text-center font-Allura text-6xl lg:top-24 lg:text-8xl 2xl:top-44">
            From Machida to the World
          </div>
          <div className="  absolute -top-52 h-screen w-full lg:-top-48 lg:h-[120vh] 2xl:-top-52">
            <Canvas >
              {/* <ThreeParticles /> */}
              <pointLight color="#ffffff" position={[10, 10, 10]} />
              <DynamicEarth />
            </Canvas>
          </div>
        </div>

        {/* <div className=" h-[95vh]  w-full absolute -top-16 ">
          <RiveComponent />
        </div> */}
      </div>
    </div>
  );
};

export default Top;
