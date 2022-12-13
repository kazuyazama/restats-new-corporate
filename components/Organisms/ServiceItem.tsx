import { ReactNode } from "react";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";

type Props = {
    title:string;
    after:string;
    children:ReactNode;
    path:string;
    image:string;
}

const ServiceItem = ({title,after,children,path,image}:Props) => {
    return (
        <div className="relative max-w-screen-xl mx-auto">
        <TopTitleText
          top="top-0"
          after={after}
        >
         {title}
        </TopTitleText>
        <div className={`${image} h-[60vh] bg-cover bg-no-repeat rounded-3xl shadow-3xl relative top-28 `}></div>
        <div className="relative pt-40 grid grid-cols-6 gap-20  ">
        <h2 className="text-5xl col-span-6 font-Roboto ">What is that?</h2>
        <div className="col-span-4 col-start-2 space-y-5" >
        <p className="text-left text-lg  tracking-wide">
          {children}
        </p>
        <div className="flex justify-end -translate-x-12">
        <MoreButton
          borderWidth="before:w-[59px]"
          color="black"
          path={path}
        
          
        >
          MORE
        </MoreButton>

        </div>

        </div>

        </div>
      </div>
    );
}

export default ServiceItem;