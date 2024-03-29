import { ReactNode } from "react";
import GoogleMaps from "../Atoms/GoogleMaps";
import PrimaryButton from "../Atoms/PrimaryButton";

type Props = {
  city: {
    lat: number;
    lng: number;
  };
  title: string;
  children: ReactNode;
};

const AccessItem = ({ city, title, children }: Props) => {
  return (
    <>
      <div className={`w-full  `}>
        <h1 className="py-5 font-Roboto text-4xl ">{title}</h1>
        <GoogleMaps city={city} />
        <div className="flex flex-col items-center justify-between gap-5 pt-5 lg:flex-row lg:gap-0">
          <div>{children}</div>
          <PrimaryButton src="https://goo.gl/maps/MyTNBUGffaRSNDdT8">
            Googleマップを見る
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default AccessItem;
