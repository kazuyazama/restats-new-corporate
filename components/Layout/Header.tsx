import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useScrollVisible from "../../hooks/useScrollVisible";
import PcNav from "../Organisms/PcNav";
import classNames from "classnames";

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
        className="fixed z-[99] w-full lg:static  "
      >
        <div
          className={classNames(
            show
              ? "bg-primary"
              : router.pathname !== "/"
              ? "bg-primary"
              : "bg-transparent",
            "w-full px-2 py-1 duration-200 lg:p-5"
          )}
        >
          <div className="mx-auto flex max-w-screen-xl items-center justify-between">
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
