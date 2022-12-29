import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useScrollVisible from "../../hooks/useScrollVisible";
import PcNav from "../Organisms/PcNav";

type Props = {
  showBelow: number;
  offset: number;
};

const Header = ({ showBelow, offset }: Props) => {
  const { show } = useScrollVisible({ showBelow, offset });

  const router = useRouter();

  return (
    <>
      <header
        aria-label="Page Header "
        id="top"
        className="fixed w-full lg:static z-[99] "
      >
        <div
          className={`w-full ${
            show
              ? "bg-primary"
              : router.pathname !== "/"
              ? "bg-primary"
              : "bg-transparent"
          } duration-200 px-2 py-1 lg:p-5 `}
          // className={`w-full fixed z-30 mx-auto p-5 lg:p-8 ${
          //   isVisible && "bg-black opacity-50 "
          // }`}
        >
          <div className="flex items-center justify-between max-w-screen-xl mx-auto">
            <Link href="/">
              <div className="cursor-pointer">
                <div className=" hidden lg:inline-flex">
                  <Image
                    loader={({ src }) => src}
                    src="/logos/restats_logo_only.webp"
                    width={80}
                    height={60}
                    objectFit="contain"
                  />
                </div>
                <div className=" inline-flex lg:hidden">
                  <Image
                    loader={({ src }) => src}
                    src="/logos/restats_logo_only.webp"
                    width={60}
                    height={60}
                    objectFit="contain"
                  />
                </div>
              </div>
            </Link>
            <div className="hidden lg:block">
              <PcNav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
