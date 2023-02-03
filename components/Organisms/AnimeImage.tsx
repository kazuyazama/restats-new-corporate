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
      <div className="group relative cursor-pointer overflow-hidden rounded-3xl ">
        <figure
          className={`${bg} ${height} w-full ${
            bg === "bg-machida"
              ? "bg-[length:100vw_50vh]"
              : "bg-[length:100vw_30vh]"
          }  bg-center bg-no-repeat after:absolute after:top-0  after:-z-10 after:h-full after:w-full after:cursor-pointer after:rounded-3xl  after:bg-gray-800 after:opacity-0 group-hover:duration-300 after:group-hover:opacity-50 lg:bg-cover lg:group-hover:scale-105`}
        >
          <div className="flex h-full  flex-col items-center justify-center gap-5">
            {title && (
              <h3 className="text-center font-Allura text-3xl font-bold tracking-wider text-white lg:text-5xl ">
                {title}
              </h3>
            )}
            <span className="hidden translate-y-5 opacity-0 delay-300 duration-300 group-hover:-translate-y-0 lg:inline-flex lg:group-hover:opacity-100">
              <MoreButton
                borderWidth="before:w-[59px]"
                beforeColor="before:border-white"
                afterColor="after:border-white"
                textColor="text-white"
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
