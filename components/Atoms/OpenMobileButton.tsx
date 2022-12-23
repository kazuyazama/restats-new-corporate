
type Props = {
  toggleDrawer:() => void;
  isOpen:boolean;
  controls:string
}

const OpenMobileButton = ({toggleDrawer,isOpen,controls}:Props) => {
    return (
     

      <button aria-expanded={isOpen} aria-controls={controls} className="relative group z-[9999] ">
      <div className=" relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-white-700 duration-200 shadow-md">
        <div onClick={toggleDrawer}  className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-aria-expanded:rotate-[42deg]`}></div>
          <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300  group-aria-expanded:-translate-x-10`}></div>
          <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-aria-expanded:rotate-[-42deg]`}></div>

        </div>
      </div>
      </button>
    );
}

export default OpenMobileButton;