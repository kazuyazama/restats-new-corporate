import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { FieldErrorsImpl, useForm, UseFormRegister } from "react-hook-form";
import { drawLine } from "tsparticles-engine";
import { FormValues } from "../../types/formValues";

type Props = {
  id: any;
  value: string;
  register?: UseFormRegister<FormValues>;
  getValues:string[]
};

const SelectCheckbox = ({  id, value, register }: Props) => {

    return (
      <label className=" flex items-center gap-4">
        {register && (
          <>
          <input
            {...register(id, {
              required: "入力が必須の項目です",
            })}
            type="checkbox"
            value={value}
            id={id}
            className="rounded-sm p-1 form-checkbox"
          />
            <span>{value}</span>
          </>
        )}
      </label>


 

    );


};

export default SelectCheckbox;
