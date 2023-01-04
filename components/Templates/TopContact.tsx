import Image from "next/image";
import ContactButton from "../Atoms/ContactButton";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";

const TopContact = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto items-center justify-between relative ">
      <div className="w-full lg:w-3/5 ">
        <div className="group flex items-center justify-center translate-y-12 lg:translate-y-0 border bg-primary h-[55vh] lg:h-[65vh] ">
          <TopTitleText
            after="after:content-['お問い合わせ']"
            top="top-10 lg:top-16"
          >
            Contact
          </TopTitleText>
          <div className=" translate-y-10 flex flex-col gap-10">
            <ContactButton
              width="w-80 lg:w-96"
              height="h-16 lg:h-20"
              path="/contact"
              bgColor="bg-secondary"
            >
              <MoreButton
                borderWidth="before:w-52"
                beforeColor="before:border-white"
                afterColor="after:border-white"
                textColor="text-white"
                path="/company"
              >
                お問い合わせフォーム
              </MoreButton>
            </ContactButton>
            <ContactButton
              width="w-80 lg:w-96"
              height="h-16 lg:h-20"
              path="tel:042-866-3979"
              bgColor="bg-gray-200"
            >
              <MoreButton
                borderWidth="before:w-36"
                beforeColor="before:border-black"
                afterColor="after:border-black"
                textColor="text-black"
                path="tel:0428663979"
              >
                042-866-3979
              </MoreButton>
            </ContactButton>
          </div>
        </div>
      </div>
      <div className=" -translate-y-2">
      <div className="hidden lg:inline-flex">
        <Image src="/マンションマン_てがみ.png" width={300} height={300} />
      </div>
      <div className="lg:hidden">
        <Image src="/マンションマン_てがみ.png" width={200} height={200} />
      </div>
      </div>
    </div>
  );
};

export default TopContact;
