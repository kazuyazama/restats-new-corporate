const ScrollDown = () => {
  return (
    <span
      className=" absolute top-[80vh]  vertical-rl text-white pb-2
    before:absolute before:h-12 before:left-5 before:bottom-0 
    before:w-[2px] before:bg-white after:w-[2px] after:absolute
     after:h-4 after:left-[25px] after:top-[26px] after:-skew-x-[31deg]  after:bg-white text-sm animate-bounce"
    >
      scroll
    </span>
  );
};

export default ScrollDown;
