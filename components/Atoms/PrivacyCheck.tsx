import Link from "next/link";
import { FormValues } from "../../types/formValues";
import type { UseFormRegister } from "react-hook-form";

type Props = {
    register:UseFormRegister<FormValues>
}

const PrivacyCheck = ({register}:Props) => {
    return (
        <label className=" flex items-center gap-4 justify-center">
        <input
          {...register("checkbox", {
            required: true,
          })}
          type="checkbox"
          className="rounded-sm p-1 form-checkbox"
        />

      <Link href="/privacy">
          <a className="underline">プライバシーポリシー</a>
      </Link><span>に同意する</span>
      </label>
    );
}

export default PrivacyCheck;