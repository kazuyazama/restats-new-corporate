import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer aria-label="Footer" className="bg-gray-100 pt-52 pb-5">
      <div className="mx-auto max-w-screen-xl space-y-8 flex flex-col justify-center items-center ">
        <div className="">

          <Image loader={({src}) => src}  src="/logos/restarts_logo.webp" width={350} height={90} />
        </div>

        <nav aria-label="Footer Nav" className="font-Roboto">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Service
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Company
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Partner
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Contact
              </Link>
            </li>

            
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
