import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  borderWidth: string;
  to: string;
};

const ListItem = ({ borderWidth, children, to }: Props) => {

  const router = useRouter();

  const underLine = `${borderWidth} before:border-b before:border-secondary before:absolute before:top-8`

  return (
    <>
      <li
        className={`relative  ${underLine} before:opacity-0 before:hover:animate-scale-in-left`}
      >
        <Link href={to}>
          <button
            className={` tracking-wider ${router.pathname === to && underLine}`}
          >
            {children}
          </button>
        </Link>
      </li>
    </>
  );
};

export default ListItem;
