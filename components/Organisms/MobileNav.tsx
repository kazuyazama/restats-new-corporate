import { useRouter } from "next/router";
import MobileNavItem from "../Atoms/MobileNavItem";
import Image from "next/image";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ setIsOpen }: Props) => {
  const router = useRouter();
  const handleClose = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };
  return (
    <nav className="container mt-20 font-Roboto ">
      <div className=" pb-2 text-center">
        <Image
          loader={({ src }) => src}
          src="/logos/restarts_logo_white.webp"
          width={250}
          height={60}
        />
      </div>

      <ul className="px-10 text-2xl leading-loose tracking-wider text-gray-100   ">
        <MobileNavItem handleClose={handleClose} path="/">
          TOP
        </MobileNavItem>
        <MobileNavItem handleClose={handleClose} path="/about">
          ABOUT
        </MobileNavItem>
        <MobileNavItem handleClose={handleClose} path="/service">
          SERVICE
        </MobileNavItem>
        <MobileNavItem handleClose={handleClose} path="/company">
          COMPANY
        </MobileNavItem>
        <MobileNavItem handleClose={handleClose} path="/contact">
          CONTACT
        </MobileNavItem>
      </ul>
    </nav>
  );
};

export default MobileNav;
