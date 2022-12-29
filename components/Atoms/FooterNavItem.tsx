import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children:ReactNode;
    path:string;
}

const FooterNavItem = ({children,path}:Props) => {
  return (
    <li>
      <Link
        className="text-gray-700 transition hover:text-gray-700/75"
        href={`${path}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default FooterNavItem;
