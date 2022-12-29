import Breadcrumbs from "../Atoms/Breadcrumbs";

type Props = {
  title:string;
  discription:string;
}


const ServiceTitle = ({title,discription}:Props) => {
  return (
    <div className="h-[40vh] pt-10 max-w-screen-xl mx-auto ">
      <div className="flex flex-col gap-7 text-gray-200">
      <Breadcrumbs title={title} />
      <div className="ml-7 flex flex-col gap-3">
        <h1 className="text-4xl lg:text-5xl relative before:w-0 before:h-24 before:border-l  before:border-secondary before:absolute before:-top-1 before:-left-7 ">{title}</h1>
        <p>{discription}</p>

      </div>
      </div>
    </div>
  );
};

export default ServiceTitle;
