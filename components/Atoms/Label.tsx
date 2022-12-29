type Props = {
    title:string;
    id:string;
    required:boolean;
}

const Label = ({title,id,required}:Props) => {
    return (
        <label
        htmlFor={id}
        className={`w-full flex items-center gap-5 
        ${required === true ? "before:content-['必須'] before:bg-black" : "before:content-['任意'] before:bg-primary" }  
        } before:text-white before:py-1 before:px-2 before:text-xs `}
        >
        {title}
        </label>
    );
}

export default Label;