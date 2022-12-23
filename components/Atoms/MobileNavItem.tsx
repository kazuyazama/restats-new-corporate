import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  handleClose: (path: string) => void;
  path: string;
};

const MobileNavItem = ({ children, handleClose, path }: Props) => {
  return (
    <li className=" focus-visible:outline">
      <button
        onClick={() => handleClose(path)}
        className=" py-2 w-full text-start"
      >
        {children}
      </button>
    </li>
  );
};

export default MobileNavItem;
