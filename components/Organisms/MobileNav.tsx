import { useRouter } from "next/router";
import MobileNavItem from "../Atoms/MobileNavItem";

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
    <nav className="mt-20 container font-Roboto ">
      <ul className="px-10 text-gray-100 leading-loose text-2xl tracking-wider   ">
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
