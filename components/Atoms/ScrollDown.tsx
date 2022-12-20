import useScrollVisible from "../../hooks/useScrollVisible";

const ScrollDown = ({offset}:{offset:number}) => {

  const { handleClick } = useScrollVisible({offset})

  // const handleClick = () => {
  //   window.scrollTo({top:800,behavior:"smooth"})
  // }


  return (
   
      <a onClick={handleClick} className=" cursor-pointer absolute top-[93vh] left-[50vw] vertical-rl text-primary z-50 pb-2
      before:absolute before:h-12 before:left-5 before:bottom-0 
      before:w-[2px] before:bg-primary after:w-[2px] after:absolute
       after:h-4 after:left-[25px] after:top-[26px] after:-skew-x-[31deg]  after:bg-primary text-sm animate-bounce"
      >
      scroll

      </a>
  );
};

export default ScrollDown;
