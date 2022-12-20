import Image from "next/image";
import TopTitleText from "../components/Atoms/TopTitleText";
import AboutItem from "../components/Organisms/AboutItem";
import ServiceTitle from "../components/Organisms/ServiceTitle";

const about = () => {
  return (
    <div className="overflow-hidden">
      <section className="">
        <ServiceTitle title="ABOUT" discription="私たちについて" />
      </section>
      <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

      <AboutItem />

      <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span>

      <section id="profile" className="py-80 bg-white">
        <div className="max-w-screen-xl mx-auto relative">
          <div className="flex justify-center items-center">
            <TopTitleText
              top="left-1/3 "
              after="after:content-['代表メッセージ']"
            >
              CEO MESSAGE
            </TopTitleText>

            
          </div>
        </div>
      </section>

      {/* <span className="absolute w-full h-64 -mt-64 clip-path-triangle-rb bg-white"></span> */}
      <span className="absolute w-full h-64 -mt-64 clip-path-triangle-rb bg-gray-200 "></span>

      <section id="profile" className="py-60  bg-gray-200">
        <div className="max-w-screen-xl mx-auto ">
          <div className=" flex justify-around ">
            <div className=" basis-full space-y-10 -translate-y-20 ">
              <h1 className="text-4xl">成功するまでやり続ける。</h1>

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

            <div className="basis-1/3 translate-y-12 2xl:translate-y-16 ">
              <Image src="/CEO.webp" loader={({src}) => src} width={400} height={550} layout="responsive"  />
            </div>
          </div>
        </div>
      </section>

      <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left  bg-white"></span>
      <section id="works" className="py-40 bg-white">
        ここに何書くか検討
      </section>
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
