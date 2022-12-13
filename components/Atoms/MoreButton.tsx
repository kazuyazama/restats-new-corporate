import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  borderWidth: string;
  color: string;
  path: string ;
};

const MoreButton = ({ children, borderWidth, color, path }: Props) => {
  const underLine = `${borderWidth} before:border-b before:border-${color} before:absolute before:top-8`;
  const before = `before:group-hover:translate-x-2 before:w-6 before:border-b before:absolute before:left-3 before:delay-200 before:duration-300  before:border-${color}`;
  const after = `after:w-3 after:border-b after:absolute after:left-[26px] after:-top-1 after:rotate-45 after:delay-200  after:duration-300 after:border-${color} after:group-hover:translate-x-2 `;
  return (
    <>
      <Link href={`${path}`}>
        <a className="flex items-center group ">
          <span
            className={`relative font-Roboto text-xl tracking-wider font-semibold text-${color}  ${underLine} before:opacity-0 before:group-hover:animate-scale-in-left`}
          >
            {children}
          </span>
          <span className={`relative  ${before} ${after}`}></span>
        </a>
      </Link>
    </>
  );
};

export default MoreButton;
