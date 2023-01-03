import { useRouter } from "next/router";
import { SubmitHandler, useFormContext } from "react-hook-form";
import ServiceTitle from "../Organisms/ServiceTitle";
import PrivacyCheck from "../Atoms/PrivacyCheck";
import InputLabel from "../Organisms/InputLabel";
import SelectCheckboxLabel from "../Organisms/SelectCheckboxLabel";
import TextAreaLabel from "../Organisms/TextAreaLabel";

import type { FormValues } from "../../types/formValues";
import TriangleLeft from "../Atoms/TriangleLeft";
import TriangleRight from "../Atoms/TriangleRight";

const Input = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data)
    router.push("/contact/?confirm=check");
  }  

  return (
    <div className="overflow-hidden">
      <section className="px-5 mt-10 lg:mt-0 bg-primary">
        <ServiceTitle title="CONTACT" discription="お問い合わせ" />
      </section>

      <TriangleLeft bgColor="bg-gray-200" />
      <section className="bg-gray-200 py-20 px-5">
        <div className=" max-w-screen-xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="grid gap-8 "
          >
            <dl className="grid lg:grid-cols-3 lg:items-center justify-center gap-7 lg:gap-10">
              <InputLabel
                title="名前"
                id="name"
                type="text"
                placeholder="山田太郎"
                required={true}
                register={register}
                errors={errors}
              />
              <InputLabel
                title="会社名 or 屋号名"
                id="company"
                type="text"
                placeholder="例）株式会社リ・スターツ"
                required={true}
                register={register}
                errors={errors}
              />
              <InputLabel
                title="メールアドレス"
                id="email"
                type="email"
                placeholder="例）info@restarts.co.jp"
                required={true}
                register={register}
                errors={errors}
              />
              <InputLabel
                title="電話番号"
                id="tel"
                type="tel"
                placeholder="例）042-866-3979"
                required={true}
                register={register}
                errors={errors}
              />

              <SelectCheckboxLabel
                title="お問い合わせの種類"
                id="select"
                required={true}
                errors={errors}
                register={register}
              />

              <TextAreaLabel
                title="内容"
                id="description"
                placeholder="例）お問い合わせ内容を入力してください"
                required={false}
                errors={errors}
                register={register}
              />
            </dl>

            <PrivacyCheck register={register} />

            <div className="flex justify-center pt-7 ">
              <button
                type="submit"
                disabled={!isValid}
                className="w-52 disabled:bg-gray-400 flex items-center justify-center z-10 text-lg rounded-lg relative overflow-hidden bg-secondary px-5 py-3  font-medium text-white tracking-wider before:absolute before:-z-10 before:left-[-100%] before:bg-accent before:w-full before:h-full before:inset-0  enabled:before:hover:left-0 before:duration-300 "
              >
                確認する
              </button>
            </div>
          </form>
        </div>
      </section>

      <TriangleRight bgColor="bg-gray-200" />

      {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}
    </div>
  );
};

export default Input;
