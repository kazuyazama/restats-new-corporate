import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="mt-5 w-full font-Roboto">
      <ul className=" text-gray-500 leading-loose space-y-2 tracking-wider cursor-pointer ">
        <li className="hover:bg-slate-300">
          <Link href="about">
            <span className="pl-4">ABOUT</span>
          </Link>
        </li>
        <li className="hover:bg-slate-300">
          <Link href="service">
            <span className="pl-4">SERVICE</span>
          </Link>
        </li>
        <li className="hover:bg-slate-300">
          <Link href="company">
            <span className="pl-4">COMPANY</span>
          </Link>
        </li>
        <li className="hover:bg-slate-300">
          <Link href="contact">
            <span className="pl-4">CONTCT</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
