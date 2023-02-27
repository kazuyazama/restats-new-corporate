import Image from "next/image";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";
import ScrollFade from "../Organisms/ScrollFade";

const TopAbout = () => {
  return (
    <div className="relative mx-auto -mt-28 max-w-screen-xl grid-cols-2 items-center gap-8 lg:mt-0 lg:grid">
      <TopTitleText after="after:content-['私たちについて']" top="lg:top-16 ">
        About
      </TopTitleText>
      <ScrollFade>
        <div className="flex w-full  flex-col space-y-5 pt-28 lg:pt-0 ">
          <h3 className="text-2xl font-semibold ">
            何度でもリスタートする集団であり続ける。
          </h3>
          <p>
            多くの人々は失敗することを恐れ、新しいことに挑戦するのを躊躇います。
            であれば、失敗しても再出発できる環境を作れば新しいことに挑戦しやすくなるではないか。
            株式会社リ・スターツの由来はここから来ています。
          </p>
          <div className=" pt-5  ">
            <MoreButton
              borderWidth="before:w-[59px]"
              beforeColor="before:border-black"
              afterColor="after:border-black"
              textColor="text-black"
              path="/about"
            >
              MORE
            </MoreButton>
          </div>
        </div>
      </ScrollFade>

      <ScrollFade propsDelay={0.6}>
        <div className="relative my-10 flex h-80  justify-center rounded-l-3xl  bg-about  bg-cover bg-center bg-no-repeat [animation-delay:300ms] lg:h-[60vh] lg:w-[50vw] lg:pt-0  ">
          <div className="absolute -bottom-28 right-2 z-30 lg:-bottom-32 lg:left-20 2xl:left-32 ">
            <div className="hidden lg:inline-flex">
              <Image
                loader={({ src }) => src}
                src="/マンションマン_ポーズ3.png"
                width={200}
                height={200}
                className="rounded-2xl"
              />
            </div>
            <div className="inline-flex lg:hidden">
              <Image
                loader={({ src }) => src}
                src="/マンションマン_ポーズ3.png"
                width={150}
                height={150}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </ScrollFade>
    </div>
  );
};

export default TopAbout;
