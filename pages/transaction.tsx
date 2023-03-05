import { NextSeo } from "next-seo";
import TriangleRight from "../components/Atoms/TriangleRight";
import ServiceTitle from "../components/Organisms/ServiceTitle";

const Transaction = () => {
  const transactionsData = [
    {
      title: "事業者の名称",
      description: "株式会社リ・スターツ",
    },
    {
      title: "責任者",
      description: "座間和也",
    },
    {
      title: "住所",
      description: "〒194-0022 東京都町田市森野6-359 横山第二ビル 2-A",
    },
    {
      title: "電話番号",
      description:
        "042-866-3979\n受付時間 12:00-21:00（土日祝を除く）※受付時間外の場合は、メールにてお問い合わせください。",
    },
    {
      title: "メールアドレス",
      description: "info@restarts.co.jp",
    },
    {
      title: "商品の販売価格",
      description: "お見積り時に提示いたします",
    },
    {
      title: "商品以外の必要料金",
      description: "お見積り時に提示いたします",
    },
    {
      title: "支払方法",
      description:
        "Stripe（ただし、一部サービスについては銀行振込みの場合もあります）",
    },
    {
      title: "支払時期",
      description: "Web開発\n",
      list:"サーバー・ドメイン費用：個別のご契約の定めに従います\n初期費用：個別のご契約の定めに従います"
    },
    {
      title: "商品の引渡時期",
      description: "個別のご契約の定めに従います",
    },
    {
      title: "返品・交換",
      description: "個別のご契約の定めに従います",
    },
  ];

  return (
    <>
      <NextSeo
        title="privacy"
        description="何度でもリスタートする集団であり続ける"
        openGraph={{
          url: "https://www.restarts.co.jp/privacy",
          title: "privacy | 株式会社リス・ターツ",
        }}
      />
      <div className="overflow-hidden ">
        <section className="mt-10 bg-primary px-5 lg:mt-0">
          <ServiceTitle
            title="TRANSACTION"
            discription="特定商取引法に関する表記"
          />
        </section>

        <span className="clip-path-triangle-left absolute -mt-32 h-32 w-full bg-gray-200 lg:-mt-64 lg:h-64"></span>

        <section className="bg-gray-200 px-5 pt-12 pb-20 lg:py-20">
          <div className=" mx-auto max-w-screen-xl">
            <div>
              <h2 className="pb-10 text-lg">特定商取引法に基づく表示</h2>
              <ul className="grid gap-8">
                {transactionsData.map((li) => (
                  <li key={li.title} className="flex flex-col gap-4  lg:flex-row">
                    <span className=" basis-1/3 font-semibold">{li.title}</span>
                    <span className=" basis-full font-normal whitespace-pre-line">{li.description} {li.list && li.list }</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <TriangleRight />
        {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}
      </div>
    </>
  );
};

export default Transaction;
