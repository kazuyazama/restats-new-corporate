import Image from "next/image";
import TopTitleText from "../components/Atoms/TopTitleText";
import TriangleLeft from "../components/Atoms/TriangleLeft";
import TriangleRight from "../components/Atoms/TriangleRight";
import AboutItem from "../components/Organisms/AboutItem";
import ServiceTitle from "../components/Organisms/ServiceTitle";
import Icon from "public/CEO.svg";
import { NextSeo } from "next-seo";
import { useInView } from "@react-spring/web";

const About = () => {

  const [ref, inView] = useInView({
    rootMargin: "-10% 0%",
    once: true,
  });
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
        <section className="mt-10 bg-primary px-5 lg:mt-0">
          <ServiceTitle title="ABOUT" discription="私たちについて" />
        </section>
        <TriangleLeft bgColor="bg-gray-200" />

        <AboutItem />

        <TriangleRight bgColor="bg-gray-200" />
        <section id="profile" className="bg-white py-60 px-5 lg:py-80">
          <div className="relative mx-auto max-w-screen-xl">
            <div className="flex items-center justify-center">
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
        <span className="clip-path-triangle-new-rb absolute  -mt-32 h-32 w-full translate-y-1 bg-gray-200 lg:-mt-64 lg:h-64 "></span>

        <section
          ref={ref}
          className="bg-gray-200 px-5 pt-10 lg:-mb-36  lg:pt-24"
        >
          <div className="mx-auto max-w-screen-xl ">
            <div className=" flex flex-col justify-center  lg:flex-row lg:justify-around ">
              {inView && (
                <div className=" basis-full animate-fade-in-bottom space-y-10 ">
                  <h1 className="text-2xl font-semibold lg:text-4xl">
                    成功するまでやり続ける。
                  </h1>

                  <p className="text-justify text-xl leading-relaxed">
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
              )}

              <div className="basis-1/3 text-end lg:-translate-y-24  ">
                <div className="hidden lg:block ">
                  {/* <Image
                  src="/CEO3.png"
                  loader={({ src }) => src}
                  width={400}
                  height={600}
                  // layout="responsive"
                  className="  object-cover"
                /> */}
                  <Image
                    src="/CEO7.svg"
                    loader={({ src }) => src}
                    width={400}
                    height={800}
                    // layout="responsive"
                    className="  object-cover"
                  />
                </div>
                <div className="lg:hidden ">
                  <Image
                    src="/CEO7.svg"
                    loader={({ src }) => src}
                    width={300}
                    height={400}
                    className="object-cover"
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

export default About;
