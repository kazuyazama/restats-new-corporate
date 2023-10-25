import { init, send } from "@emailjs/browser";
import { useRouter } from "next/router";
import { SubmitHandler, useFormContext } from "react-hook-form";

import InputLabel from "../Organisms/InputLabel";
import ServiceTitle from "../Organisms/ServiceTitle";
import TextAreaLabel from "../Organisms/TextAreaLabel";

import type { FormValues } from "../../types/formValues";
import Label from "../Atoms/Label";
import TriangleLeft from "../Atoms/TriangleLeft";

const Confirm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext<FormValues>();

  const values = getValues();

  if (!isValid) {
    router.push(`/`);
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    //emailjsに送信する処理
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);
      send(serviceID, templateID, data).then(
        () => {
          router.push(
            { pathname: "contact/complete", query: { display: "ok" } },
            "contact/complete"
          );
        },
        () => {
          alert("送信出来ませんでした");
        }
      );
      reset();
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="px-5 mt-10 lg:mt-0 bg-primary">
        <ServiceTitle title="CONTACT" discription="お問い合わせ" />
      </section>

      <TriangleLeft bgColor="bg-gray-200" />
      <section className="bg-gray-200 pt-10 pb-20 px-5">
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
                getValues={values.name}
              />
              <InputLabel
                title="会社名 or 屋号名"
                id="company"
                type="text"
                placeholder="例）株式会社リ・スターツ"
                required={true}
                getValues={values.company}
              />
              <InputLabel
                title="メールアドレス"
                id="email"
                type="email"
                placeholder="例）info@restarts.co.jp"
                required={true}
                getValues={values.email}
              />
              <InputLabel
                title="電話番号"
                id="tel"
                type="tel"
                placeholder="例）042-866-3979"
                required={true}
                getValues={values.tel}
              />

              <dt className={`col-span-1 `}>
                <Label title="お問い合わせの種類" id="select" required={true} />
              </dt>

              <dd className="col-span-2">
                <div className="space-y-2">
                  {values.select &&
                    values.select
                      .join("\n")
                      .split("\n")
                      .map((t,length) => <p key={length}>{t}</p>)}
                </div>
              </dd>

              {/* <SelectCheckboxLabel
                title="お問い合わせの種類"
                id="select"
                required={true}
                getValues={values.select}
                setValue={setValue}
              /> */}

              <TextAreaLabel
                title="内容"
                id="description"
                placeholder="例）お問い合わせ内容を入力してください"
                required={false}
                getValues={values.description}
              />
            </dl>

            <div className="flex items-center justify-center gap-10 lg:gap-20 pt-7">
              <button
                type="submit"
                className=" flex items-center justify-center w-52 z-10 rounded-lg relative overflow-hidden bg-primary px-5 py-3 text-lg font-medium text-white tracking-wider before:absolute before:-z-10 before:left-[-100%] before:bg-neutral before:w-full before:h-full before:inset-0  enabled:before:hover:left-0 before:duration-300 "
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* <TriangleRight bgColor="bg-gray-200" /> */}
    </div>
  );
};

export default Confirm;
