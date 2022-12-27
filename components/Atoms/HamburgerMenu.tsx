type Props = {
  toggleDrawer: () => void;
  isOpen: boolean;
  controls: string;
};

const HamburgerMenu = ({ toggleDrawer, isOpen, controls }: Props) => {
  return (
    <button
      aria-expanded={isOpen}
      aria-controls={controls}
      className="relative group z-[9999] "
    >
      <div
        onClick={toggleDrawer}
        className=" relative flex overflow-hidden items-center justify-center rounded-full w-[60px] h-[60px] transform transition-all bg-white-700 duration-200  "
      >
        <div
          
          className="flex flex-col justify-between w-[30px] h-[25px] transform transition-all duration-300 origin-center overflow-hidden"
        >
          <div
            className={`bg-white h-[2px] w-14 transform transition-all duration-300 origin-left group-aria-expanded:rotate-[42deg]`}
          ></div>
          <div
            className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300  group-aria-expanded:-translate-x-10`}
          ></div>
          <div
            className={`bg-white h-[2px] w-14 transform transition-all duration-300 origin-left group-aria-expanded:rotate-[-42deg]`}
          ></div>
        </div>
      </div>
    </button>
  );
};

export default HamburgerMenu;
