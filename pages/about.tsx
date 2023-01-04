import Image from "next/image";
import TopTitleText from "../components/Atoms/TopTitleText";
import TriangleLeft from "../components/Atoms/TriangleLeft";
import TriangleRight from "../components/Atoms/TriangleRight";
import AboutItem from "../components/Organisms/AboutItem";
import ServiceTitle from "../components/Organisms/ServiceTitle";
import { NextSeo } from "next-seo";

const about = () => {
  return (
    <>
      <NextSeo
        title="about"
        description="何度でもリスタートする集団であり続ける"
        openGraph={{
          url: "https://www.restarts.co.jp/about",
          title: "about | 株式会社リス・ターツ",
        }}
      />
      <div className="overflow-hidden ">
        <section className="px-5 mt-10 lg:mt-0 bg-primary">
          <ServiceTitle title="ABOUT" discription="私たちについて" />
        </section>
        <TriangleLeft bgColor="bg-gray-200" />

        <AboutItem />

        <TriangleRight bgColor="bg-gray-200" />
        <section id="profile" className="py-60 lg:py-80 px-5 bg-white">
          <div className="max-w-screen-xl mx-auto relative">
            <div className="flex justify-center items-center">
              <TopTitleText
                top="lg:left-1/3 "
                after="after:content-['代表メッセージ']"
              >
                CEO MESSAGE
              </TopTitleText>
            </div>
          </div>
        </section>

        {/* <span className="absolute w-full h-64 -mt-64 clip-path-triangle-rb bg-white"></span> */}
        <span className="absolute translate-y-1  w-full h-32 -mt-32 lg:h-64 lg:-mt-64 clip-path-triangle-new-rb bg-gray-200 "></span>

        <section className="pt-10 pb-12 lg:pt-24 lg:pb-16 px-5  bg-gray-200">
          <div className="max-w-screen-xl mx-auto ">
            <div className=" flex flex-col lg:flex-row  justify-center lg:justify-around ">
              <div className=" basis-full space-y-10 lg:-translate-y-20 ">
                <h1 className="text-2xl lg:text-4xl font-semibold">
                  成功するまでやり続ける。
                </h1>

                <p className="text-xl leading-relaxed text-justify">
                  私は今まで数多くの挑戦をし、失敗をしてきました。
                  <br />
                  失敗が怖いから行動できない？それは大きな間違いです。失敗があるから成功するのです。
                  <br />
                  世の中の成功者は失敗談を語りませんがその裏には多くの失敗が誰しもあります。
                  <br />
                  成功するまでやり続けられる場所を提供したい。
                  <br />
                  そんな思いから弊社を設立しました。
                </p>
              </div>

              <div className="basis-1/3 translate-y-12 text-end lg:translate-y-20 2xl:translate-y-16 ">
                <div className="hidden lg:block">
                <Image
                  src="/CEO.webp"
                  loader={({ src }) => src}
                  width={400}
                  height={550}
                  layout="responsive"
                />
                </div>
                <div className="lg:hidden translate-y-1">
                <Image
                  src="/CEO.webp"
                  loader={({ src }) => src}
                  width={300}
                  height={300}
                />
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* <TriangleLeft bgColor="bg-white" /> */}
        {/* <section id="works" className="py-40 px-5 bg-white"></section> */}
        {/* <TriangleRight bgColor="bg-white" /> */}
  
      </div>
    </>
  );
};

export default about;
