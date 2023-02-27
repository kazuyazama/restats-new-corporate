import { createRef, Suspense, useEffect, useState } from "react";
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
  const { ref, scrollTargetOffset } = useTargetScroll();

  // const splitRef = createRef<HTMLDivElement>();

  const [isOpening, setIsOpening] = useState(true);
  const [isOpeningText, setIsOpeningText] = useState(false);
  const [layout, setLayout] = useState(false);

  //オープニングアニメーションを出す為に通常Layoutを2秒遅らせる

  useEffect(() => {
    const timeOut = () => {
      // setIsOpening(true);
      setIsOpeningText(true);
      //2秒経ったらオープニングを消す
      setTimeout(() => {
        setIsOpening(false);
        setLayout(true);
      }, 2000);
    };
    timeOut();
  }, []);

  // function Loader() {
  //   const { active, progress, errors, item, loaded, total } = useProgress()
  //   return <Html center>{loaded && <Opening />}</Html>
  // }

  // useEffect(() => {
  //   if (!"load") return;
  //   window.addEventListener("load", timeOut);
  //   return () => window.removeEventListener("load", timeOut);
  // }, []);

  return (
    <>
      <Opening
        // splitRef={splitRef}
        isOpening={isOpening}
        isOpeningText={isOpeningText}
      />

      {/* {layout && ( */}
      <div className=" ">
        {/* <Particle /> */}

        <div className="w-full overflow-hidden lg:-mt-28">
          <section className=" relative -z-20 h-[85vh]  bg-machida2 bg-cover bg-center lg:h-[100vh]  ">
            <Top />
          </section>
        </div>

        <div className="absolute top-[78vh] right-20 z-10 lg:top-[90vh] lg:left-[50vw] ">
          <ScrollDown scrollTargetOffset={scrollTargetOffset} />
        </div>

        <TriangleLeft bgColor="bg-gray-200" />
        <section
          ref={ref}
          id="about"
          className="overflow-hidden bg-gray-200 px-5 pt-40 pb-20 lg:py-20  "
        >
          <TopAbout />
        </section>

        <TriangleRight bgColor="bg-gray-200" />

        <section
          id="service"
          className="overflow-hidden py-52 px-5 lg:pt-72  lg:pb-[22rem]"
        >
          <TopService />
        </section>

        <TriangleLeft bgColor="bg-gray-200" />
        <section
          id="company"
          className="overflow-hidden bg-gray-200  py-10 px-5  lg:pt-16"
        >
          <TopCompany />
        </section>

        <TriangleRight bgColor="bg-gray-200" />
        <section
          id="partner"
          className="overflow-hidden px-5 pt-72 pb-60  lg:py-[50vh]"
        >
          <TopParther />
        </section>

        <TriangleLeft bgColor="bg-gray-200" />
        <section
          id="contact"
          className="overflow-hidden  bg-gray-200 px-5 lg:py-12"
        >
          <TopContact />
        </section>

        <TriangleRight bgColor="bg-gray-200" />
        <section
          id="partner"
          className="overflow-hidden py-52 px-5  lg:py-[40vh]"
        >
          <TopNews data={data} />
        </section>

        {/* <TriangleLeft bgColor="bg-gray-100" /> */}
      </div>
      {/* )} */}
    </>
  );
}
