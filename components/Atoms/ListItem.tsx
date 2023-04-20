import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  borderWidth: string;
  href: string;
};

const ListItem = ({ borderWidth, children, href }: Props) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <li
        className={classNames(
          router.pathname === href && "border-b border-secondary",
          "relative pb-1 tracking-wider duration-100 hover:border-b hover:border-secondary "
        )}
      >
        {children}
      </li>
    </Link>
  );
};

export default ListItem;
