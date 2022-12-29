import { ErrorMessage } from "@hookform/error-message";
import { InputBasic } from "../../types/InputBasic";
import Label from "../Atoms/Label";
import SelectCheckbox from "../Atoms/SelectCheckbox";


const SelectCheckboxLabel = ({
  title,
  id,
  required,
  errors,
  register,
  getValues,
}: InputBasic) => {
  return (
    <>
      <dt className={`col-span-1  ${errors && "mb-2"} `}>
        <Label title={title} id={id} required={required} />
      </dt>
      <dd className="col-span-2 space-y-4">
        <SelectCheckbox
          register={register}
          id="select"
          value="web制作・webアプリケーション開発について"
          getValues={getValues}
        />

        <SelectCheckbox
          register={register}
          id="select"
          value="自社サービスについて"
          getValues={getValues}
        />

        <SelectCheckbox
          register={register}
          id="select"
          value=" パートナー募集について"
          getValues={getValues}
        />

        <SelectCheckbox
          register={register}
          id="select"
          value="その他"
          getValues={getValues}
        />

        {errors && (
          <ErrorMessage
            errors={errors}
            name="select"
            render={({ message }) =>
              message && (
                <span className="mt-2 inline-block text-red-500 ">
                  {message}
                </span>
              )
            }
            // {`${errors.name}` && <span className="mt-2 inline-block text-red-500 ">入力が必須の項目です</span>}
          />
        )}
      </dd>
    </>
  );
};

export default SelectCheckboxLabel;
