import { useInView } from "@react-spring/web";
import { ReactNode } from "react";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";

type Props = {
  title: string;
  after: string;
  children: ReactNode;
  path?: string;
  image: string;
  delay?: string;
};

const ServiceItem = ({ title, after, children, path, image }: Props) => {
  const [ref, inView] = useInView({
    rootMargin: "-10% 0%",
    once: true,
  });
  return (
    <div ref={ref} className={`relative mx-auto max-w-screen-xl  `}>
      {inView && (
        <>
          <TopTitleText top="top-0" after={after}>
            {title}
          </TopTitleText>
          <div
            className={`${image} shadow-3xl relative top-28 h-96 animate-fade-in-bottom rounded-3xl bg-cover bg-center bg-no-repeat lg:h-[60vh]  `}
          ></div>
          <div className="grid-cols-auto relative grid gap-10 pt-40 lg:grid-cols-6 lg:gap-20   ">
            <h2 className="col-span-full font-Roboto text-3xl lg:col-span-4 lg:col-start-2 lg:text-5xl  ">
              What is that?
            </h2>
            <div className="col-span-full space-y-5 lg:col-span-4 lg:col-start-2 ">
              <p className="text-justify text-lg  tracking-wide ">{children}</p>
              {path && (
                <div className="flex -translate-x-12 justify-end  ">
                  <MoreButton
                    borderWidth="before:w-[59px]"
                    beforeColor="before:border-black"
                    afterColor="after:border-black"
                    textColor="text-black"
                    path={path}
                  >
                    MORE
                  </MoreButton>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceItem;
