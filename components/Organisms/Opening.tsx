type Props = {
  isOpening: boolean;
  isOpeningText: boolean;
};

const Opening = ({ isOpening, isOpeningText }: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[999] bg-primary overflow-hidden  ${
        !isOpening && " animate-slide-trans-bottom "
      } `}
    >
      <p
        className={` fixed overflow-x-hidden top-1/2 z-[1000] left-1/2 -translate-x-[320px] w-0  whitespace-nowrap overflow-hidden text-secondary tracking-wider text-5xl font-semibold   ${
          isOpeningText && "animate-slide-width-right"
        } `}
      >
        成功するまで挑戦し続ける
      </p>
    </div>
  );
};

export default Opening;
