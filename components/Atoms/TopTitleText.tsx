import { ReactNode } from "react";

type Props = {
    children:ReactNode & string;
    after:string;
    top:string;
}


const TopTitleText = ({children,after,top}:Props) => {
    return (
        <h1 style={{opacity:100}} className={`font-Roboto text-5xl tracking-wide pb-5 absolute ${top} before:border-b before:w-10 before:border-secondary before:absolute before:bottom-0 ${after} after:text-sm after:align-middle after:ml-5 after:font-NotoSans`}>
          {children}
        </h1>
    );
}

export default TopTitleText;