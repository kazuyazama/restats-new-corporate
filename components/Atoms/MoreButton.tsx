import Link from "next/link";
import { after } from "node:test";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  borderWidth: string;
  beforeColor: string;
  afterColor: string;
  textColor: string;
  path: string;
};

const MoreButton = ({
  children,
  borderWidth,
  beforeColor,
  afterColor,
  path,
  textColor,
}: Props) => {
  const underLine = `${borderWidth} before:border-b ${beforeColor} before:absolute before:top-8`;
  const before = `before:group-hover:translate-x-2 before:w-6 before:border-b before:absolute before:left-3 before:delay-200 before:duration-300  ${beforeColor}`;
  const after = `after:w-3 after:border-b after:absolute after:left-[26px] after:-top-1 after:rotate-45 after:delay-200  after:duration-300  ${afterColor} after:group-hover:translate-x-2 `;
  return (
    <>
      <Link href={`${path}`}>
        <a className="flex items-center group ">
          <span
            className={`relative font-Roboto text-xl tracking-wider font-semibold ${textColor} ${underLine} before:opacity-0 before:group-hover:animate-scale-in-left`}
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
