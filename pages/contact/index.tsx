import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import Confirm from "../../components/Form/Confirm";
import Input from "../../components/Form/Input";

const Contact = () => {
  const router = useRouter()
  const isConfirm = router.query.confirm;
  console.log(isConfirm)

  const methods = useForm({
    //初回のバリデーション実行後、次のバリデーション実行タイミング
    mode: "onChange",
    //バリデーション時に最初に発生したエラーもしくは全てのエラーを収集
    criteriaMode: "all",
  });
  return (
    <div className="">
      <FormProvider {...methods}>
        {!isConfirm ? <Input /> : <Confirm />}
      </FormProvider>
    </div>
  );
};

export default Contact;




