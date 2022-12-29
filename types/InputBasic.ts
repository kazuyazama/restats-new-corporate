import { ReactNode } from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { FormValues } from "./formValues";

export type InputBasic = {
    title:string
    errors?:Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
    register?: UseFormRegister<FormValues>
    id:string
    type?:string
    placeholder?:string
    required:boolean
    getValues?:any;
}