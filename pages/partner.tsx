import { useInView } from "@react-spring/web";
import { NextSeo } from "next-seo";
import TriangleLeft from "../components/Atoms/TriangleLeft";
import TriangleRight from "../components/Atoms/TriangleRight";
import ServiceTitle from "../components/Organisms/ServiceTitle";

const partner = () => {


  return (
    <>
      <NextSeo
        title="partner"
        description="何度でもリスタートする集団であり続ける"
        openGraph={{
          url: "https://www.restarts.co.jp/partner",
          title: "partner | 株式会社リス・ターツ",
        }}
      />
      <div className="overflow-hidden ">
        <section className="px-5 mt-10 lg:mt-0 bg-primary">
          <ServiceTitle title="PARTNER" discription="パートナー募集について" />
        </section>
        <TriangleLeft bgColor="bg-gray-200" />

        <section  id="about" className="pt-36 pb-52 bg-gray-200 px-5 ">
          <div className="text-3xl lg:text-4xl font-semibold grid place-items-center animate-fade-in-bottom">
            現在改修中です
          </div>
        </section>

        {/* <TriangleRight bgColor="bg-gray-200" /> */}
        

      </div>
    </>
  );
};

export default partner;
