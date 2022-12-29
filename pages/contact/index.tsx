import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import Confirm from "../../components/Pages/Confirm";
import Input from "../../components/Pages/Input";
import NewConfirm from "../../components/Pages/Confirm";
import NewInput from "../../components/Pages/Input";

const index = () => {

    const router = useRouter()
    const isConfirm = router.query.confirm;

    const methods = useForm({
        //初回のバリデーション実行後、次のバリデーション実行タイミング
        mode:"onChange",
        //バリデーション時に最初に発生したエラーもしくは全てのエラーを収集
        criteriaMode:"all"
    })
    return (
        <div className="wrapper">
        <FormProvider {...methods}>
          {!isConfirm ? (
            <>
              <Input />
            </>
          ) : (
            <>
              <Confirm />
            </>
          )}
        </FormProvider>
      </div>
    );
}

export default index;