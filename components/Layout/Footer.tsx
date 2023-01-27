import Image from "next/image";
import FooterNavItem from "../Atoms/FooterNavItem";

const Footer = () => {
  return (
    <footer aria-label="Footer" className="bg-gray-100 pt-12 pb-5">
      <div className="mx-auto max-w-screen-xl space-y-8 flex flex-col justify-center items-center ">
        <div className="">
          <div className="hidden lg:inline-flex">
            <Image
              loader={({ src }) => src}
              src="/logos/restarts_logo.webp"
              width={350}
              height={90}
            />
          </div>
          <div className="inline-flex lg:hidden">
            <Image
              loader={({ src }) => src}
              src="/logos/restarts_logo.webp"
              width={250}
              height={60}
            />
          </div>
        </div>

        <nav aria-label="Footer Nav" className="font-Roboto">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
            <FooterNavItem path="/">ABOUT</FooterNavItem>
            <FooterNavItem path="/service">SERVICE</FooterNavItem>
            <FooterNavItem path="/company">COMPANY</FooterNavItem>
            <FooterNavItem path="/partner">PARTNER</FooterNavItem>
            <FooterNavItem path="/contact">CONTACT</FooterNavItem>
            <FooterNavItem path="privacy">PRIVACY POLICY</FooterNavItem>
          </ul>
        </nav>

        <p className=" text-center text-sm text-gray-500  ">
          Copyright &copy; 2022. Restats Inc All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
