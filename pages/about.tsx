import Image from "next/image";
import TopTitleText from "../components/Atoms/TopTitleText";
import AboutItem from "../components/Organisms/AboutItem";
import ServiceTitle from "../components/Organisms/ServiceTitle";

const about = () => {
  return (
    <div className="overflow-hidden">
      <section className="px-5 mt-10 lg:mt-0 bg-primary">
        <ServiceTitle title="ABOUT" discription="私たちについて" />
      </section>
      <span className="absolute w-full h-32 -mt-32 lg:h-64 lg:-mt-64 clip-path-triangle-left bg-gray-200"></span>

      <AboutItem />

      <span className="absolute w-full h-32 mb-32 lg:h-64 lg:mb-64 clip-path-triangle-right bg-gray-200"></span>

      <section id="profile" className="py-80 px-5 bg-white">
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
      <span className="absolute w-full h-32 -mt-32 lg:h-64 lg:-mt-64 clip-path-triangle-rb bg-gray-200 "></span>

      <section className="py-32 lg:py-60 px-5  bg-gray-200">
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

            <div className="basis-1/3 translate-y-24 lg:translate-y-12 2xl:translate-y-16 ">
              <Image
                src="/CEO.webp"
                loader={({ src }) => src}
                width={400}
                height={550}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>

      <span className="absolute w-full h-32 -mt-32 lg:h-64 lg:-mt-64 clip-path-triangle-left  bg-white"></span>
      <section id="works" className="py-40 px-5 bg-white"></section>
      <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-white"></span>
      {/* <section id="contact" className="">
        </section>

        <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section id="contact" className="">
        </section>

        <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span> */}
    </div>
  );
};

export default about;
