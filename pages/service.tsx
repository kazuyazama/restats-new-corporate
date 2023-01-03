import { NextSeo } from "next-seo";
import TriangleLeft from "../components/Atoms/TriangleLeft";
import TriangleRight from "../components/Atoms/TriangleRight";
import ServiceItem from "../components/Organisms/ServiceItem";
import ServiceTitle from "../components/Organisms/ServiceTitle";

const service = () => {
  return (
    <>
      <NextSeo
        title="service"
        description="何度でもリスタートする集団であり続ける"
        openGraph={{
          url: "https://www.restarts.co.jp/service",
          title: "service | 株式会社リス・ターツ",
        }}
      />
      <div className="overflow-hidden ">
        <section className="px-5 mt-10 lg:mt-0 bg-primary relative ">
          <ServiceTitle
            title="SERVICE"
            discription="弊社で行なっているサービスを紹介します"
          />
        </section>

        <TriangleLeft bgColor="bg-gray-200" />

        <section id="about" className="py-40 bg-gray-200 px-5 ">
          <ServiceItem
            title="マンションwifiネット"
            after="after:content-['集合住宅向けインターネット回線検索ポータルサイト']"
            path="https://mansion-wifi.net/"
            image="bg-manshonwifi"
          >
            マンションWiFiネットは建物導入済みのインターネットを
            一覧で検索・比較・相談・お申し込みまで可能にした日本で唯一のWEBサイトです。
            <br />
            今までは建物で使用できるインターネット回線を調べるには、
            オーナー様や、管理会社、各インターネット会社へ確認が必要でした。
            それ故に、希望としている回線や適正な回線を選択できないことが多くありました。
            それを解決したのがマンションwifiネットです。
          </ServiceItem>
        </section>

        <TriangleRight bgColor="bg-gray-200" />
        {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}

        <section id="profile" className="py-80 px-5">
          <ServiceItem
            title="Web開発"
            after="after:content-['webサイト・webアプリケーション開発']"
            path="/"
            image="bg-web-development"
          >
            webサイトやwebアプリケーションは誰に見てもらうものですか？
            弊社では、クライアント様に満足して頂くのは通過点であり、それを実際に利用するユーザ様にとって
            如何に使いやすいか、ストレスなく快適に利用できるか、を意識してweb開発設計を行なっています。
            <br />
            その他、webマーティング・SEO・MEO・SNS運用などwebに関してはお気軽にご相談ください。
          </ServiceItem>
        </section>

        <TriangleLeft bgColor="bg-gray-200" />
        <section id="works" className="py-40 px-5 bg-gray-200">
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

        <span className="absolute w-full h-32 mb-64 lg:h-64 lg:mb-64 clip-path-triangle-right bg-gray-200"></span>

        {/* <section id="contact" className="">
        </section>

        <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

        <section id="contact" className="">
        </section>

        <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200"></span> */}
      </div>
    </>
  );
};

export default service;
