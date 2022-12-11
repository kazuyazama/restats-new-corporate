type Props = {
    title:string;
    after:string;
}


const TopTitleText = ({title,after}:Props) => {
    return (
        <h1 className={`text-5xl text-start  ml-5 pb-5 after:content-['-${after}'] after:pl-5 after:text-sm after:align-middle`}>
          {title}
        </h1>
    );
}

export default TopTitleText;