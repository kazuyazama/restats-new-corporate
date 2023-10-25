import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import Confirm from "../../components/Form/Confirm";
import Input from "../../components/Form/Input";

const Contact = () => {
  const router = useRouter();
  const isConfirm = router.query.confirm;

  const methods = useForm({
    //初回のバリデーション実行後、次のバリデーション実行タイミング
    mode: "onChange",
    //バリデーション時に最初に発生したエラーもしくは全てのエラーを収集
    criteriaMode: "all",
  });
  return (
    <>
      <NextSeo
        title="contact"
        description="何度でもリスタートする集団であり続ける"
        openGraph={{
          url: "https://www.restarts.co.jp/contact",
          title: "contact | 株式会社リス・ターツ",
        }}
      />
      <FormProvider {...methods}>
        {!isConfirm ? <Input /> : <Confirm />}
      </FormProvider>
    </>
  );
};

export default Contact;
