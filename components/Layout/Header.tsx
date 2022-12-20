import Image from "next/image";
import Link from "next/link";
import Navigation from "../Organisms/Navigation";

const Header = ({ scrollRef }: any) => {
  return (
    <>
      <header aria-label="Page Header " id="top" ref={scrollRef}  >
        <div
          className="w-full bg-primary p-5 "
          // className={`w-full fixed z-30 mx-auto p-5 lg:p-8 ${
          //   isVisible && "bg-black opacity-50 "
          // }`}
        >
          <div className="flex items-center justify-between max-w-screen-xl mx-auto">
            <Link
              href="/"
              className="text-xl font-bold text-gray-100 lg:text-3xl order-last lg:order-first cursor-pointer"
            >
                <Image loader={({src}) => src} src="/logos/restats_logo_only.webp" width={80} height={60} objectFit="contain" />
            </Link>
            <div className="">
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
