import { useInView } from "@react-spring/web";
import Image from "next/image";
import ContactButton from "../Atoms/ContactButton";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";

const TopContact = () => {
  const [ref, inView] = useInView({
    rootMargin: "-10% 0%",
    once: true,
  });
  return (
    <div
      ref={ref}
      className="relative mx-auto flex max-w-screen-xl flex-col items-center justify-between lg:flex-row "
    >
      {inView && (
        <>
          <div className="w-full animate-fade-in-bottom lg:w-3/5">
            <div className="group flex h-[55vh] translate-y-12 items-center justify-center rounded-3xl border bg-primary lg:h-[55vh] lg:translate-y-0 ">
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
                    path="/company"
                  >
                    お問い合わせフォーム
                  </MoreButton>
                </ContactButton>
                <ContactButton
                  width="w-72 lg:w-96"
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
          <div className=" -translate-y-2 animate-fade-in-bottom [animation-deley:300ms]">
            <div className="hidden lg:inline-flex">
              <Image
                src="/マンションマン_てがみ.png"
                width={300}
                height={300}
              />
            </div>
            <div className="lg:hidden">
              <Image
                src="/マンションマン_てがみ.png"
                width={200}
                height={200}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TopContact;
