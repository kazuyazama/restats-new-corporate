import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  title:string;
}

const Breadcrumbs = ({title}:Props) => {
    return (
        <div className="flex items-center gap-1">
        <Link href="/">
          <a className="">TOP</a>
        </Link>
        <MdKeyboardArrowRight />
        <span>{title}</span>
      </div>
    );
}

export default Breadcrumbs;