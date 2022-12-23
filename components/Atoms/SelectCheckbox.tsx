import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";
import { ReactNode } from "react";
import { FieldErrorsImpl, useForm, UseFormRegister } from "react-hook-form";
import { drawLine } from "tsparticles-engine";
import { FormValues } from "../../types/formValues";

type Props = {
    children:ReactNode;
    id:string;
    value:string;
    register: UseFormRegister<FormValues>

   
}

const SelectCheckbox = ({children,id,value,register}:Props) => {
  return (
    <label className=" flex items-center gap-4">
      <input
        {...register("select",{
            required: "入力が必須の項目です"
        })}
        type="checkbox"
        value={value}
        id={id}
        className="rounded-sm p-1 form-checkbox"
      />
    
        {<p>{children}</p> }
    </label>
  );
};

export default SelectCheckbox;
