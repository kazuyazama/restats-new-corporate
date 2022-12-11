import { Link as Scroll } from "react-scroll";
import type { ReactNode } from "react";
import Link from "next/link";

const ContactButton = ({ children }: { children: ReactNode }) => {
  return (
    <Link href="/contact">
      <button className="before:absolute before:-z-10 before:left-[-100%] before:bg-accent before:w-full before:h-full before:inset-0 before:hover:left-0 before:duration-200 z-10 rounded-lg relative overflow-hidden bg-secondary px-5 py-3 text-sm font-medium text-white tracking-wider ">
        {children}
      </button>
    </Link>
  );
};

export default ContactButton;
