import Image from "next/image";

const TopAbout = () => {
  return (
    <div className="py-20 bg-gray-200  ">
      <div className="grid grid-cols-2 items-center gap-4 max-w-screen-xl mx-auto">
        <div className="w-full">
       <h1 className="text-5xl ">about</h1>
       <h3>
          【（創業者）】は、【（業界の問題点の説明）】のため、【（会社）】をスタートしました。
          それが【（解決策にたどりつくまで）】の理由です。
          その過程で、【（マイルストーンや達成したことの共有）】がありました。
          わたしたちは、【（今後のミッションの表明）】をしていきたいと考えます。

       </h3>

        </div>
        <div className="w-full ">
            <Image src="/topImage-skelton.png" width={400} height={300} />
        </div>
      </div>
    </div>
  );
};

export default TopAbout;
