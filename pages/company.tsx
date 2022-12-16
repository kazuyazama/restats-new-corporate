import { link } from "fs";
import TopTitleText from "../components/Atoms/TopTitleText";
import ServiceItem from "../components/Organisms/ServiceItem";
import ServiceTitle from "../components/Organisms/ServiceTitle";
import Table from "../components/Organisms/Table";

const company = () => {
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

      // tokyo: "東京都",
      // kyoto: "京都",
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
  ];

  return (
    <div className="overflow-hidden">
      <section className="">
        <ServiceTitle title="COMPANY" discription="企業情報" />
      </section>

      <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

      <section id="about" className="py-40 bg-gray-200 ">
        <div className="max-w-screen-xl mx-auto relative">
          <Table profile={profile} />
        </div>
      </section>

      <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span>
      {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}

      <section id="profile" className="py-80">
        <div className="max-w-screen-xl mx-auto relative">
          <TopTitleText top="top-0" after="after:content-['アクセス']">
            ACCESS
          </TopTitleText>
        </div>
      </section>

      <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

      <section id="works" className="py-40 bg-gray-200">
        <ServiceItem
          title="代理店事業"
          after="after:content-['大手キャリア様の販売代理店として活動をしています']"
          image="bg-agency"
        >
          主にビッグローブ光、NURO光をはじめとした大手キャリア様の販売代理店として活動をしています。
          <br />
          私たちはこの代理店業界において、10年以上携わっているプロフッショナル集団です。50社以上の企業様と業務委託契約を交わし、販売網を構築しています。
          その経験から円滑で適正なソリューションをお約束します。
        </ServiceItem>
      </section>

      <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span>

      {/* <section id="contact" className="">
        </section>

        <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section id="contact" className="">
        </section>

        <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span> */}
    </div>
  );
};

export default company;
