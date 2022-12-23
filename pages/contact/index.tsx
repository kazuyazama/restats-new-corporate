import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import SelectCheckbox from "../../components/Atoms/SelectCheckbox";
import ServiceTitle from "../../components/Organisms/ServiceTitle";
import InputText from "../../components/Atoms/InputText";
import PrivacyCheck from "../../components/Atoms/PrivacyCheck";
import type { FormValues } from "../../types/formValues";
import ContactButton from "../../components/Atoms/ContactButton";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  const inputArray = [
    {
      title: "お名前",
      id: "name",
      type: "text",
      placeholder: "例）山田太郎",
      required: true,
    },
    {
      title: "会社名 or 屋号名",
      id: "company",
      type: "text",
      placeholder: "例）株式会社リ・スターツ",
      required: true,
    },
    {
      title: "メールアドレス",
      id: "email",
      type: "email",
      placeholder: "例）info@restarts.co.jp",
      required: true,
    },
    {
      title: "電話番号",
      id: "tel",
      type: "tel",
      placeholder: "例）042-866-3979",
      required: true,
    },
    {
      title: "お問い合わせの種類",
      id: "select",
      type: "select",
      required: true,
    },
    {
      title: "内容",
      id: "description",
      placeholder: "例）お問い合わせ内容を入力してください",
      required: false,
    },
  ];
  return (
    <div className="overflow-hidden">
      <section className="">
        <ServiceTitle
          title="CONTACT"
          discription="お問い合わせ"
        />
      </section>

      <span className="absolute w-full h-64 -mt-64 clip-path-triangle-left bg-gray-200"></span>

      <section className="bg-gray-200 py-20">
        <div className=" max-w-screen-xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="grid gap-8 "
          >
            {inputArray.map((dl) => (
              <dl className="flex items-center justify-center" key={dl.id}>
                <dt className={`basis-1/3 ${errors && "mb-2"} `}>
                  <label
                    htmlFor={dl.id}
                    className={`w-full ${
                      dl.required === true
                        ? "before:content-['必須'] before:bg-black"
                        : "before:content-['任意'] before:bg-primary"
                    } before:text-white before:py-1 before:px-2 before:text-[1px] before:mr-5`}
                  >
                    {dl.title}
                  </label>
                </dt>
                {dl.type !== "select" ? (
                  dl.type ? (
                    <dd className="basis-2/3">
                      <InputText
                        id={dl.id}
                        type={dl.type}
                        placeholder={dl.placeholder}
                        errors={errors}
                        register={register}
                      />
                    </dd>
                  ) : (
                    <dd className="basis-2/3">
                      <textarea
                        {...register("description")}
                        id="description"
                        placeholder="例）お問い合わせ内容を入力してください"
                        className="w-full rounded-xl form-textarea h-36"
                      ></textarea>
                    </dd>
                  )
                ) : (
                  <dd className="basis-2/3 space-y-4">
                    <SelectCheckbox
                      register={register}
                      id={dl.id}
                      value="web制作・webアプリケーション開発について"
                    >
                      web制作・webアプリケーション開発について
                    </SelectCheckbox>
                    <SelectCheckbox
                      register={register}
                      id={dl.id}
                      value="自社サービスについて"
                    >
                      自社サービスについて
                    </SelectCheckbox>
                    <SelectCheckbox
                      register={register}
                      id={dl.id}
                      value=" パートナー募集について"
                    >
                      パートナー募集について
                    </SelectCheckbox>
                    <SelectCheckbox
                      register={register}
                      id={dl.id}
                      value="その他"
                    >
                      その他
                    </SelectCheckbox>
                    <ErrorMessage
                      errors={errors}
                      name={dl.id}
                      render={({ message }) =>
                        message && (
                          <span className="mt-2 inline-block text-red-500 ">
                            {message}
                          </span>
                        )
                      }
                      // {`${errors.name}` && <span className="mt-2 inline-block text-red-500 ">入力が必須の項目です</span>}
                    />
                  </dd>
                )}
              </dl>
            ))}

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

      <span className="absolute w-full h-64 mb-64 clip-path-triangle-right bg-gray-200 "></span>
      {/* <span className="absolute w-full h-64 mb-64  clip-path-triangle-rb bg-white"></span> */}
    </div>
  );
};

export default Contact;
