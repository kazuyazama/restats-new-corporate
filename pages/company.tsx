import React from "react";
import TopTitleText from "../components/Atoms/TopTitleText";
import ServiceTitle from "../components/Organisms/ServiceTitle";
import Table from "../components/Organisms/Table";
import PrimaryButton from "../components/Atoms/PrimaryButton";
import GoogleMaps from "../components/Atoms/GoogleMaps";
import TriangleLeft from "../components/Atoms/TriangleLeft";
import TriangleRight from "../components/Atoms/TriangleRight";


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

const company = () => {



  return (
    <div className="overflow-hidden ">
      <section className="px-5 mt-10 lg:mt-0 bg-primary">
        <ServiceTitle title="COMPANY" discription="企業情報" />
      </section>

     <TriangleLeft bgColor="bg-gray-200" />

      <section id="about" className="py-40 bg-gray-200 ">
        <div className="max-w-screen-xl mx-auto relative">
          <Table profile={profile} />
        </div>
      </section>

      <TriangleRight bgColor="bg-gray-200" />
      {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}

      <section id="profile" className="py-80 px-5">
        <div className="max-w-screen-xl mx-auto relative">
          <TopTitleText top="top-0" after="after:content-['アクセス']">
            ACCESS
          </TopTitleText>

          <div className="py-32 grid lg:grid-cols-2 gap-14">
            <div className="w-full">
              <h1 className="py-5 text-4xl font-Roboto ">TOKYO OFFICE</h1>
             <GoogleMaps city={tokyo} />

              <div className="flex flex-col lg:flex-row justify-between pt-5 items-center gap-5 lg:gap-0">
                <div>
                  <p>〒194-0022</p>
                  <p>東京都町田市森野6-359 横山第2ビル 2-A</p>
                </div>
                  <PrimaryButton src="https://goo.gl/maps/MyTNBUGffaRSNDdT8">Googleマップを見る</PrimaryButton>
              </div>
            </div>
            <div className="w-full">
              <h1 className="py-5 text-4xl font-Roboto ">KYOTO OFFICE</h1>
              <GoogleMaps city={kyoto} />
              <div className="flex flex-col lg:flex-row justify-between pt-5 items-center gap-5 lg:gap-0">
                <div>
                  <p>〒610-0313</p>
                  <p>京都府京田辺市三山木垣ノ内６９ 大隈ビル 203</p>
                </div>
                  <PrimaryButton src="https://goo.gl/maps/p1i8nubhfpc7Wzap8">Googleマップを見る</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
       
      <TriangleLeft bgColor="bg-gray-100" />


     


    </div>
  );
};



export default company;
