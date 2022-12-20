import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children:ReactNode;
  src:string;
}

const PrimaryButton = ({children,src}:Props) => {
    return (
      <Link href={`${src}`}>
        <a
        className="group relative inline-block overflow-hidden border border-secondary px-10 py-3 "
       
      >
        <span className="absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all group-hover:w-full group-active:bg-accent"></span>

        <span className="relative text-sm font-medium text-secondary transition-colors group-hover:text-white">
          {children}
        </span>
      </a>
      </Link>
    );
}

export default PrimaryButton;