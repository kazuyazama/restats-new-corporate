import Image from "next/image";

const Footer = () => {
  return (
    <footer aria-label="Footer" className="bg-gray-100 pt-52 pb-5">
      <div className="mx-auto max-w-screen-xl space-y-8 flex flex-col justify-center items-center ">
        <div className="">

          <Image src="/logos/restarts_logo.webp" width={350} height={90} />
        </div>

        <nav aria-label="Footer Nav" className="font-Roboto">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Service
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Company
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Partner
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/"
              >
                Contact
              </a>
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
