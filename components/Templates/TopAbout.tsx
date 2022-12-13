import Image from "next/image";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";

const TopAbout = () => {
  return (
      <div className="grid grid-cols-2 items-center gap-8 max-w-screen-xl mx-auto relative">
          <TopTitleText after="after:content-['私たちについて']" top="top-0">About</TopTitleText>
        <div className="w-full space-y-5 flex flex-col ">
          <h3 className="text-2xl ">何度でもリスタートする集団であり続ける。</h3>
          <p>
            多くの人々は失敗することを恐れ、新しいことに挑戦するのを躊躇います。
            ​であれば、失敗しても再出発できる環境を作れば新しいことに挑戦しやすくなるではないか。
            株式会社リ・スターツの由来はここから来ています。
          </p>
          <div className="">
            <MoreButton
              borderWidth="before:w-[59px]"
              color="black"
              path="/about"
            >
              MORE
            </MoreButton>
          </div>
        </div>
        <div className="bg-about bg-cover bg-no-repeat bg-center w-[50vw] h-[60vh]  rounded-l-3xl  flex justify-center relative">
        
          <div className="absolute -bottom-40 left-20 2xl:left-32 z-30">
          <Image src="/about.webp" width={200} height={200}  className="rounded-2xl"  />

          </div>



         

        
        </div>
      </div>
  );
};

export default TopAbout;
