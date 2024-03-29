import Image from "next/image";
import ContactButton from "../Atoms/ContactButton";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";
import ScrollFade from "../Organisms/ScrollFade";

const TopContact = () => {
  return (
    <div className=" mx-auto  grid lg:grid-cols-2 place-items-center max-w-screen-xl justify-center  ">
      <div className="w-full  ">
        <ScrollFade>
          <div className="group flex h-[55vh] translate-y-12 items-center justify-center rounded-3xl border lg:translate-y-0 ">
            <TopTitleText
              after="after:content-['お問い合わせ']"
              top="top-7 lg:top-16 "
            >
              Contact
            </TopTitleText>
            <div className=" flex translate-y-10 flex-col gap-5 lg:gap-10">
              <ContactButton
                width="w-72 lg:w-96"
                height="h-16 lg:h-20"
                path="/contact"
                bgColor="bg-secondary"
              >
                <MoreButton
                  borderWidth="before:w-52"
                  beforeColor="before:border-white"
                  afterColor="after:border-white"
                  textColor="text-white"
                  path="/contact"
                >
                  お問い合わせフォーム
                </MoreButton>
              </ContactButton>
            
            </div>
          </div>
        </ScrollFade>
      </div>
      <ScrollFade propsDelay={0.6}>
        <div className=" -translate-y-2 ">
          <div className="hidden lg:inline-flex">
            <Image src="/マンションマン_てがみ.png" width={300} height={300} />
          </div>
          <div className="lg:hidden">
            <Image src="/マンションマン_てがみ.png" width={200} height={200} />
          </div>
        </div>
      </ScrollFade>
    </div>
  );
};

export default TopContact;
