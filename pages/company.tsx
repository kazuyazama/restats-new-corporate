import React from "react";
import TopTitleText from "../components/Atoms/TopTitleText";
import ServiceTitle from "../components/Organisms/ServiceTitle";
import Table from "../components/Organisms/Table";
import TriangleLeft from "../components/Atoms/TriangleLeft";
import TriangleRight from "../components/Atoms/TriangleRight";
import { NextSeo } from "next-seo";
import { useInView } from "@react-spring/web";
import AccessItem from "../components/Organisms/AccessItem";

const profile = [
  {
    title: "社名",
    discription: ["株式会社リ・スターツ"],
  },
  {
    title: "所在地",
    discription: [
      "東京本社：東京都町田市森野6-359 横山第二​ビル 2-A",
      "京都支店：京都府京田辺市三山木垣ノ内69 大隅ビル 203",
    ],
  },
  {
    title: "設立",
    discription: ["2020年9月30日"],
  },
  {
    title: "資本金",
    discription: ["3,000,000円"],
  },
  {
    title: "事業内容",
    discription: ["マンションwifiネット", "web開発", "代理店事業"],
  },
  {
    title: "代表取締役",
    discription: ["座間 和也"],
  },
  {
    title: "従業員数　",
    discription: ["８名（業務委託含む）"],
  },
  {
    title: "TEL",
    discription: ["042-866-3979（代表）"],
  },
];

//@react-google-maps/api の設定

const center = {
  lat: 35.776072247629266,
  lng: 137.81963278291485,
};

const tokyo = {
  lat: 35.55086933132063,
  lng: 139.43185558163188,
};

const kyoto = {
  lat: 34.805139983575174,
  lng: 135.77838432442095,
};

const Company = () => {
  const [ref, inView] = useInView({
    rootMargin: "-10% 0%",
    once: true,
  });

  return (
    <>
      <NextSeo
        title="company"
        description="何度でもリスタートする集団であり続ける"
        openGraph={{
          url: "https://www.restarts.co.jp/company",
          title: "company | 株式会社リス・ターツ",
        }}
      />
      <div className="overflow-hidden ">
        <section className="mt-10 bg-primary px-5 lg:mt-0">
          <ServiceTitle title="COMPANY" discription="企業情報" />
        </section>
        <TriangleLeft bgColor="bg-gray-200" />
        <section id="about" className="bg-gray-200 pt-20 pb-2 ">
          <div ref={ref} className="relative mx-auto max-w-screen-xl">
            <Table profile={profile} />
          </div>
        </section>
        <TriangleRight bgColor="bg-gray-200" />
        {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}

        <section id="profile" className="px-5 pt-36 lg:pt-72">
          <div className="relative mx-auto max-w-screen-xl">
            <TopTitleText top="top-0" after="after:content-['アクセス']">
              ACCESS
            </TopTitleText>

            <div ref={ref} className="grid  gap-14 py-32 lg:grid-cols-2">
              <AccessItem city={tokyo} title="TOKYO OFFICE" inView={inView}>
                <p>〒194-0022</p>
                <p>東京都町田市森野6-359 横山第2ビル 2-A</p>
              </AccessItem>

              <AccessItem
                city={kyoto}
                delay="[animation-delay:300ms]"
                title="KYOTO OFFICE"
                inView={inView}
              >
                <p>〒610-0313</p>
                <p>京都府京田辺市三山木垣ノ内６９ 大隈ビル 203</p>
              </AccessItem>
            </div>
          </div>
        </section>

        {/* <TriangleLeft bgColor="bg-gray-100" /> */}
      </div>
    </>
  );
};

export default Company;
