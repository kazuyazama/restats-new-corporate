import Card from "../Organisms/Card";

const TopParther = () => {
  return (
    <div className=" py-80 max-w-screen-xl mx-auto">
      <h1 className="text-5xl text-start ml-5 pb-5">partner</h1>
      <div className="grid grid-cols-3 gap-6  ">
        <div className="">
          <Card title="マンションwifiネット" discription="業界初の集合住宅向けインターネット回線検索ポータルサイトを運営しています" />
        </div>
        <div className="">
          <Card title="web制作" discription="webサイト、webアプリケーションを制作しています" />
        </div>
        <div className="">
          <Card title="通信事業" discription="ビッグローブ光をメインにインターネット回線代理店を運営しています"/>
        </div>
      </div>
    </div>
  );
};

export default TopParther;
