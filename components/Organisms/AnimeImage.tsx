import Link from "next/link";
import MoreButton from "../Atoms/MoreButton";

type Props = {
  bg: string;
  title?: string;
  height: string;
  path: string;
};

const AnimeImage = ({ bg, title, height, path }: Props) => {
  return (
    <Link href={`${path}`} className="">
      <div className="overflow-hidden relative rounded-3xl group cursor-pointer ">
        <figure
          className={`${bg} ${height} w-full ${bg === "bg-machida" ? "bg-[length:100vw_50vh]" : "bg-[length:100vw_30vh]" }  lg:bg-cover bg-center bg-no-repeat after:-z-10  after:bg-gray-800 after:w-full after:h-full after:absolute after:top-0  after:rounded-3xl after:cursor-pointer after:opacity-0 after:group-hover:opacity-50 lg:group-hover:scale-105 group-hover:duration-300`}
        >
          <div className="flex flex-col  h-full gap-5 justify-center items-center">
            {title && (
              <h3 className="text-3xl text-center lg:text-5xl text-white font-bold tracking-wider  font-OpenSans ">
                {title}
              </h3>
            )}
            <span className="hidden lg:inline-flex opacity-0 lg:group-hover:opacity-100 translate-y-5 group-hover:-translate-y-0 duration-300 delay-300">
              <MoreButton
                borderWidth="before:w-[59px]"
                color="white"
                path={path}
              >
                MORE
              </MoreButton>
            </span>
          </div>
        </figure>
      </div>
    </Link>
  );
};

export default AnimeImage;
