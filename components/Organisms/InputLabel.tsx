import { ReactNode } from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../types/formValues";
import { InputBasic } from "../../types/InputBasic";
import InputText from "../Atoms/InputText";
import Label from "../Atoms/Label";

const InputLabel = ({
  getValues,
  title,
  errors,
  register,
  id,
  type,
  placeholder,
  required,
}: InputBasic) => {
  return (
    <>
      <dt className={`col-span-1  ${errors && "mb-2"} `}>
        <Label title={title} id={id} required={required} />
      </dt>
      <dd className="col-span-2">
        {!getValues ? (
          <InputText
            id={id}
            type={type}
            placeholder={placeholder}
            errors={errors}
            register={register}
          />
        ) : (
          <span>{getValues}</span>
        )}
      </dd>
    </>
  );
};

export default InputLabel;
