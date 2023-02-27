import { NextSeo } from "next-seo";
import TriangleLeft from "../components/Atoms/TriangleLeft";
import TriangleRight from "../components/Atoms/TriangleRight";
import ServiceTitle from "../components/Organisms/ServiceTitle";
import ScrollFade from "../components/Organisms/ScrollFade";

const Partner = () => {
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
        <section className="mt-10 bg-primary px-5 lg:mt-0">
          <ServiceTitle title="PARTNER" discription="パートナー募集について" />
        </section>
        <TriangleLeft bgColor="bg-gray-200" />

        <section id="about" className="bg-gray-200 px-5 pt-36 pb-52 ">
          <ScrollFade>
            <div className="grid  place-items-center text-3xl font-semibold lg:text-4xl">
              現在改修中です
            </div>
          </ScrollFade>
        </section>

        {/* <TriangleRight bgColor="bg-gray-200" /> */}
      </div>
    </>
  );
};

export default Partner;
