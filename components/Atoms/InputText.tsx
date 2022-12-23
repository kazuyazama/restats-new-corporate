import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { FormValues } from "../../types/formValues";

type Props = {
  register: UseFormRegister<FormValues>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  type: string;
  id:any;
  placeholder?: string;
};

const InputText = ({ errors, register, type, id, placeholder }: Props) => {
  console.log(id);

  return (
    <>
      <input
        {...register(id, {
          required: "入力が必須の項目です"
        })}
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full py-3 rounded-xl form-input "
      />
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) =>
          message && (
            <span className="mt-2 inline-block text-red-500 ">
            {message}
            </span>
          )
        }
      />
    </>
  );
};

export default InputText;
