import Image from "next/image";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";

const TopAbout = () => {
  return (
      <div className="lg:grid grid-cols-2 items-center gap-8 max-w-screen-xl mx-auto relative -mt-28 lg:mt-0">
          <TopTitleText after="after:content-['私たちについて']" top="lg:top-16 ">About</TopTitleText>
        <div className="w-full space-y-5 flex flex-col pt-28 lg:pt-0  ">
          <h3 className="text-2xl font-semibold ">何度でもリスタートする集団であり続ける。</h3>
          <p>
            多くの人々は失敗することを恐れ、新しいことに挑戦するのを躊躇います。
            ​であれば、失敗しても再出発できる環境を作れば新しいことに挑戦しやすくなるではないか。
            株式会社リ・スターツの由来はここから来ています。
          </p>
          <div className="absolute -bottom-10 lg:bottom-40 ">
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
        <div className="bg-about bg-cover bg-no-repeat bg-center lg:w-[50vw] h-80 lg:h-[60vh]  rounded-l-3xl  flex justify-center relative my-10 lg:pt-0   ">
        
          <div className="absolute -bottom-28 lg:-bottom-32 right-2 lg:left-20 2xl:left-32 z-30 ">
            <div className="hidden lg:inline-flex">
          <Image loader={({src}) => src} src="/マンションマン_ポーズ3.png" width={200} height={200}  className="rounded-2xl"  />
            </div>
            <div className="inline-flex lg:hidden">
          <Image loader={({src}) => src} src="/マンションマン_ポーズ3.png" width={150} height={150}  className="rounded-2xl"  />
            </div>

          </div>
        
        </div>
      </div>
  );
};

export default TopAbout;
