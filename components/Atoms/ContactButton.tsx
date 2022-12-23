import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  width?:string;
  height?:string;
  path?:string;
}

const ContactButton = ({ children,width,height,path, }:Props) => {
  return (
    <Link href={`${path}`}>
      <button className={`${width && width} ${height && height}  flex items-center justify-center z-10 rounded-lg relative overflow-hidden bg-secondary px-5 py-3 text-sm font-medium text-white tracking-wider before:absolute before:-z-10 before:left-[-100%] before:bg-accent before:w-full before:h-full before:inset-0 before:hover:left-0 before:duration-300`} >
        {children}
      </button>
    </Link>
  );
};

export default ContactButton;
