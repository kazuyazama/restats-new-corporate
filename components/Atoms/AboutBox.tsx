import { ReactNode } from "react";

type Props = {
    title:string;
    subTitle:string;
    children:ReactNode;
}

const AboutBox = ({title,subTitle,children}:Props) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl gap-2 bg-gray-300 w-full h-52">
      <h2 className="font-Roboto text-2xl font-semibold">{title}</h2>
      <h2 className="text-lg">{subTitle}</h2>
      <p className="pt-1">
       {children}
      </p>
    </div>
  );
};

export default AboutBox;
