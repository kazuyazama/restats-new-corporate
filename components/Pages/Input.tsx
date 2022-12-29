import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import SelectCheckbox from "../Atoms/SelectCheckbox";
import ServiceTitle from "../Organisms/ServiceTitle";
import InputText from "../Atoms/InputText";
import PrivacyCheck from "../Atoms/PrivacyCheck";
import type { FormValues } from "../../types/formValues";
import ContactButton from "../Atoms/ContactButton";
import { useRouter } from "next/router";
import Label from "../Atoms/Label";
import InputLabel from "../Organisms/InputLabel";
import SelectCheckboxLabel from "../Organisms/SelectCheckboxLabel";
import TextAreaLabel from "../Organisms/TextAreaLabel";



const Input = () => {

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => router.push("/contact/?confirm=check");
  


  return (
    <div className="overflow-hidden">
      <section className="px-5 mt-10 lg:mt-0 bg-primary">
        <ServiceTitle
          title="CONTACT"
          discription="お問い合わせ"
        />
      </section>


      <span className="absolute w-full h-32 -mt-32 lg:h-64 lg:-mt-64 clip-path-triangle-left bg-gray-200"></span>

      <section className="bg-gray-200 py-20 px-5">
        <div className=" max-w-screen-xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="grid gap-8 "
          >
              <dl className="grid grid-cols-3 lg:items-center justify-center gap-5" >

                <InputLabel title="名前" id="name" type="text" placeholder="山田太郎" required={true} register={register} errors={errors} />
                <InputLabel title="会社名 or 屋号名" id="company" type="text" placeholder="例）株式会社リ・スターツ" required={true} register={register} errors={errors} />
                <InputLabel title="メールアドレス" id="email" type="email" placeholder="例）info@restarts.co.jp" required={true} register={register} errors={errors} />
                <InputLabel title="電話番号" id="tel" type="tel" placeholder="例）042-866-3979" required={true} register={register} errors={errors} />

                <SelectCheckboxLabel title="お問い合わせの種類" id="select" required={true} errors={errors} register={register} />

                <TextAreaLabel title="内容" id="description" placeholder="例）お問い合わせ内容を入力してください" required={false}  errors={errors} register={register} />
                
              </dl>

          <PrivacyCheck register={register} />

            <button
              type="submit"
              disabled={!isValid}
              className=" disabled:bg-neutral flex items-center justify-center z-10 rounded-lg relative overflow-hidden bg-secondary px-5 py-3 text-sm font-medium text-white tracking-wider before:absolute before:-z-10 before:left-[-100%] before:bg-accent before:w-full before:h-full before:inset-0  enabled:before:hover:left-0 before:duration-300 "
            >
              確認する
            </button>
          </form>
        </div>
      </section>

      <span className="absolute w-full h-32 mb-32 lg:h-64 lg:mb-64 clip-path-triangle-right bg-gray-200 "></span>
      {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}
    </div>
  );
};

export default Input;
