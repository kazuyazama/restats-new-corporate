import { ReactNode } from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../types/formValues";
import { InputBasic } from "../../types/InputBasic";
import Label from "../Atoms/Label";

type Props = {
    title:string
    errors?:Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
    register?: UseFormRegister<FormValues>
    id:string
    type?:string
    placeholder:string
    required:boolean
    children?:ReactNode;
}

const TextAreaLabel = ({getValues,title,id,required,errors,register}:InputBasic) => {
    return (
    <>  

        <dt className={`col-span-1  ${errors && "mb-2"} `}>
        <Label title={title} id={id} required={required} />
       </dt>
        <dd className="col-span-2">
        {register ? (
            <textarea
            {...register("description")}
            id="description"
            placeholder="例）お問い合わせ内容を入力してください"
            className="w-full rounded-xl form-textarea h-36"
            ></textarea>
        ) : (
            <p
            className="w-full rounded-xl form-textarea h-36"
            >{getValues}</p>
        )}
       </dd>
    </>
    );
}

export default TextAreaLabel;