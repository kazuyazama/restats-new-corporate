import { ReactNode } from "react";
import { FormValues } from "./formValues";

export type inputArray<T> = 
    ({
        title: string;
        id: T;
        type?: string;
        placeholder?: string;
        required: boolean;
 
    })[]
