import Ad from "../components/Organisms/Ad";
import { Banner } from "../types/banner";
import { client } from "../libs/client.js";
import Top from "../components/Organisms/Top";
import { useEffect, useRef, useState } from "react";
import Opening from "../components/Organisms/Opening";
import TopAbout from "../components/Templates/TopAbout";
import TopService from "../components/Templates/TopService";
import TopCompany from "../components/Templates/TopCompany";
import TopContact from "../components/Templates/TopContact";
import TopParther from "../components/Templates/TopPartner";

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
  // const domRef = useRef<HTMLElement>(null);

  const [isOpening, setIsOpening] = useState(true);
  const [isOpeningText, setIsOpeningText] = useState(false);

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

  return (
    <>
      {/* <Opening isOpening={isOpening} isOpeningText={isOpeningText} /> */}

      <div className="overflow-hidden ">
        <section className="h-[50vh] md:h-[100vh] bg-primary ">
          <Top />
        </section>

        <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section id="about" className="py-20 bg-gray-200 ">
          <TopAbout />
        </section>

        <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span>
        {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}

        <section id="profile" className="py-96">
          <TopService />
        </section>

        <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section id="works" className="py-40   bg-gray-200">
          <TopCompany />
        </section>

        <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span>

        <section id="contact" className="">
          <TopParther />
        </section>

        <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section id="contact" className=" py-40 bg-gray-200">
          <TopContact />
        </section>

        <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span>

        {/* <Ad data={data} /> */}
      </div>
    </>
  );
}
