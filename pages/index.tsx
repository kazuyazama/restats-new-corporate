import { createRef, useEffect, useLayoutEffect, useState } from "react";
import Ad from "../components/Organisms/Ad";
import { Banner } from "../types/banner";
import { client } from "../libs/client.js";
import Top from "../components/Organisms/Top";
import Opening from "../components/Organisms/Opening";
import TopAbout from "../components/Templates/TopAbout";
import TopService from "../components/Templates/TopService";
import TopCompany from "../components/Templates/TopCompany";
import TopContact from "../components/Templates/TopContact";
import TopParther from "../components/Templates/TopPartner";
import Particle from "../components/Particle";
import ScrollDown from "../components/Atoms/ScrollDown";
import useTargetScroll from "../hooks/useTargetScroll";
import Swr from "../components/Swr";
import { gsap, Power2 } from "gsap";

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "banner",
  });
  // .then((res) => console.log(res.json()));

  return {
    props: {
      data: data,
    },
  };
};

export default function Home({ data }: { data: Banner }) {
  const { ref, scrollTarget, scrollTargetOffset } = useTargetScroll();

  const splitRef = createRef<HTMLDivElement>();

  const [isOpening, setIsOpening] = useState(true);
  const [isOpeningText, setIsOpeningText] = useState(false);

  //オープニングアニメーションを出す為に通常Layoutを2秒遅らせる

  useEffect(() => {
    const timeOut = () => {
      setIsOpening(true);
      setIsOpeningText(true);
      setTimeout(() => {
        setIsOpening(false);
      }, 2000);
    };
    timeOut();
  }, []);

  // useEffect(() => {
  //   if (!"load") return;
  //   window.addEventListener("load", timeOut);
  //   return () => window.removeEventListener("load", timeOut);
  // }, []);

  //文字列分割する処理

  // useEffect(() => {
  //   const wrapCharSpan = function(str){
  //     return [...str].map(char => `<span>${char}</span>`).join('');
  // }

  // //対象の要素を取得する
  // const target = document.querySelector('.target');
  // //要素の内容を関数の実行結果で置き換える
  // target.innerHTML = wrapCharSpan(target.textContent);

  // },[])

  return (
    <>
      <Opening
        splitRef={splitRef}
        isOpening={isOpening}
        isOpeningText={isOpeningText}
      />

      {/* <div className="target">町田から世界へ</div> */}

      <div className="">
        <Particle />

        <section className=" overflow-hidden lg:animate-kenburns-top  h-[85vh] md:h-[100vh] bg-machida2  bg-cover bg-center relative -z-20 lg:-mt-28   ">
          <Top />
        </section>
        <div className="absolute top-[78vh] lg:top-[92vh] right-20 lg:left-[50vw] ">
          <ScrollDown
            scrollTarget={scrollTarget}
            scrollTargetOffset={scrollTargetOffset}
          />
        </div>

        <span className="absolute w-full h-32 lg:h-48 -mt-32 lg:-mt-48 clip-path-triangle-left bg-gray-200 -z-10"></span>

        <section
          ref={ref}
          id="about"
          className="py-56 lg:py-28 bg-gray-200 overflow-hidden px-5  "
        >
          <TopAbout />
        </section>

        <span className="absolute w-full h-32 mb-32 lg:h-64 lg:mb-64 clip-path-triangle-right bg-gray-200"></span>
        {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}

        <section
          id="service"
          className=" py-64 lg:py-[26rem] overflow-hidden  px-5"
        >
          <TopService />
        </section>

        <span className="absolute w-full h-32 -mt-32 lg:h-64 lg:-mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section
          id="company"
          className="py-20 lg:py-40  bg-gray-200 overflow-hidden  px-5"
        >
          <TopCompany />
        </section>

        <span className="absolute w-full h-32 mb-32 lg:h-64 lg:mb-64 clip-path-triangle-right bg-gray-200"></span>

        <section id="partner" className="py-72 lg:py-96 overflow-hidden  px-5">
          <TopParther />
        </section>

        <span className="absolute w-full h-32 -mt-32 lg:h-64 lg:-mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section
          id="contact"
          className="py-60 bg-gray-200 overflow-hidden px-5"
        >
          <TopContact />
        </section>

        <span className="absolute w-full h-32 mb-32 lg:h-64 lg:mb-64 clip-path-triangle-right bg-gray-200"></span>

        {/* <Ad data={data} /> */}
      </div>
    </>
  );
}
