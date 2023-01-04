import { useEffect, useState } from "react";
import { News } from "../types/News";
import { client } from "../libs/client.js";
import useTargetScroll from "../hooks/useTargetScroll";
import Top from "../components/Organisms/Top";
import Opening from "../components/Organisms/Opening";
import TopAbout from "../components/Templates/TopAbout";
import TopService from "../components/Templates/TopService";
import TopCompany from "../components/Templates/TopCompany";
import TopContact from "../components/Templates/TopContact";
import TopParther from "../components/Templates/TopPartner";
import Particle from "../components/Organisms/Particle";
import ScrollDown from "../components/Atoms/ScrollDown";
import TopNews from "../components/Templates/TopNews";
import TriangleLeft from "../components/Atoms/TriangleLeft";
import TriangleRight from "../components/Atoms/TriangleRight";

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "news",
  });

  return {
    props: {
      data: data.contents,
    },
  };
};

export default function Home({ data }: { data: News }) {
  const { ref, scrollTarget, scrollTargetOffset } = useTargetScroll();

  // const splitRef = createRef<HTMLDivElement>();

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
      {/* <Opening
        // splitRef={splitRef}
        isOpening={isOpening}
        isOpeningText={isOpeningText}
      /> */}

      <div className=" ">
        <Particle />

        <section className=" overflow-hidden lg:animate-kenburns-top  h-[85vh] lg:h-[100vh] bg-machida2  bg-cover bg-center relative -z-20 lg:-mt-28   ">
          <Top />
        </section>
        <div className="absolute top-[78vh] z-10 lg:top-[90vh] right-20 lg:left-[50vw] ">
          <ScrollDown
            scrollTarget={scrollTarget}
            scrollTargetOffset={scrollTargetOffset}
          />
        </div>

        <TriangleLeft bgColor="bg-gray-200" />
        <section
          ref={ref}
          id="about"
          className="pt-40 pb-20 lg:py-20 bg-gray-200 overflow-hidden px-5  "
        >
          <TopAbout />
        </section>

        <TriangleRight bgColor="bg-gray-200" />


        <section
          id="service"
          className="py-52 lg:pt-72 lg:pb-[22rem] overflow-hidden  px-5"
        >
          <TopService />
        </section>

        <TriangleLeft bgColor="bg-gray-200" />
        <section
          id="company"
          className="py-10 lg:pt-16  bg-gray-200 overflow-hidden  px-5"
        >
          <TopCompany />
        </section>

        <TriangleRight bgColor="bg-gray-200" />
        <section id="partner" className="pt-72 pb-60 lg:py-[50vh] overflow-hidden  px-5">
          <TopParther />
        </section>

        <TriangleLeft bgColor="bg-gray-200" />
        <section
          id="contact"
          className="pt-32 pb-24 lg:py-52 bg-gray-200 overflow-hidden px-5"
        >
          <TopContact />
        </section>

        <TriangleRight bgColor="bg-gray-200" />
        <section id="partner" className="py-52 lg:py-[40vh] overflow-hidden  px-5">
          <TopNews data={data} />
        </section>

        {/* <TriangleLeft bgColor="bg-gray-100" /> */}
      </div>
    </>
  );
}
