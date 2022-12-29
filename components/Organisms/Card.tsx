import Image from "next/image";
import Link from "next/link";
import AnimeImage from "./AnimeImage";

type Props = {
  title: string;
  discription: string;
  src: string;
  path: string;
  bg:string;
  height:string;
};

const Card = ({ title, discription, src, path,bg,height }: Props) => {
  return (
    <>
        <AnimeImage bg={bg} height={height} path={path} />
   
        {/* <Image
          alt={title}
          src={src}
          width={500}
          height={450}
          layout="responsive"
          className="object-cover hover:opacity-60"
        /> */}

      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-2 max-w-sm text-gray-900">{discription}</p>
    </>
  );
};

export default Card;
