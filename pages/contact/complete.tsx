import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Complete = () => {
  const [isDisplay, setIsDisplay] = useState("");

  // 直アクセスのリダイレクト処理
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (router.query.display === "ok") {
        setIsDisplay(router.query.display);
      } else {
        router.push("/");
      }
    }
  }, [router.isReady]);

  return (
    <>
      {isDisplay && (
        <div className="overflow-x-hidden py-20">
          <div className="flex flex-col justify-center items-center gap-5 py-5">
            <h1 className="text-2xl">お問い合わせありがとうございます。</h1>
            <p className="text-lg">
              お電話もしくはメールにてご返信をさせていただきます。{" "}
            </p>
            <Link href="/">
              <a className="btn btn-ghost">トップに戻る</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Complete;
