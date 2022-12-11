import Image from "next/image";
import Link from "next/link";
import ArrowButton from "../Atoms/ArrowButton";
import ContactButton from "../Atoms/ContactButton";
import MoreButton from "../Atoms/MoreButton";
import PrimaryButton from "../Atoms/PrimaryButton";

const TopCompany = () => {
  return (
    <div className="py-40   bg-gray-200 ">
      <div className="flex justify-center max-w-screen-xl mx-auto">
        <div className="basis-1/3 relative ">
          <h1 className="text-5xl ">Company</h1>
          {/* <div className="absolute top-1/2 -translate-y-1/2 space-y-6">
            <h3 className="text-xl">町田から世界へ</h3>
            <PrimaryButton />
          </div> */}
        </div>
        <div className="basis-full space-y-4">
          <Link href="/company" className="">
            <div className="overflow-hidden relative rounded-3xl group cursor-pointer">
              <figure className="bg-machida-background w-full h-[70vh] bg-cover bg-center bg-no-repeat after:-z-10  after:bg-gray-800 after:w-full after:h-full after:absolute after:top-0  after:rounded-3xl after:cursor-pointer after:opacity-0 after:group-hover:opacity-50 group-hover:scale-105 group-hover:duration-300">
                <div className="flex flex-col  h-full gap-5 justify-center items-center">
                  <h3 className="text-5xl text-white font-bold tracking-wider   ">
                    From Machida to the world
                  </h3>
                  <span className=" opacity-0 group-hover:opacity-100 translate-y-5 group-hover:-translate-y-0 duration-300 delay-300">
                  <MoreButton borderWidth="before:w-[59px]" color="white" path="/company">MORE</MoreButton>

                  </span>
                 
           
                </div>
                {/* <Image
            src="/machida.webp"
            width={300}
            height={200}
            layout="responsive"
            className="rounded-3xl"

          /> */}
              </figure>
              
            </div>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default TopCompany;
