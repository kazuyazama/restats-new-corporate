import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumbs = () => {
    return (
        <div className="flex items-center gap-1">
        <Link href="/">
          <a className="">TOP</a>
        </Link>
        <MdKeyboardArrowRight />
        <span>service</span>
      </div>
    );
}

export default Breadcrumbs;