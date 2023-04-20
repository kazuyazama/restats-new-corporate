type Props = {
  title: string;
  id: string;
  required: boolean;
};

const Label = ({ title, id, required }: Props) => {
  return (
    <label
      htmlFor={id}
      className={` flex min-w-full items-center  gap-5 whitespace-nowrap  
        ${
          required === true
            ? "before:bg-black before:content-['必須']"
            : "before:bg-primary before:content-['任意']"
        }  
        } before:w-10 before:py-1 before:px-1 before:text-center before:text-xs  before:text-white   `}
    >
      {title}
    </label>
  );
};

export default Label;
