import { News } from "../../types/News";

type Props = {
    data:News;
}

const TopNews = ({ data }:Props) => {
  return (
    <div className="grid max-w-screen-xl mx-auto items-center relative ">
      <div className="grid gap-5 lg:gap-10 absolute w-full ">
        <div className=" ">
          <h1 className="text-3xl font-Roboto">News</h1>
        </div>
        <ul className="flex flex-col divide-y">
           {data.map((li) => (
          <li key={li.id} className="flex flex-col lg:flex-row gap-1 lg:gap-20 py-5">
            <span>{li.createdAt.split("-").join(".").slice(0,10)}</span>
            <p>{li.title}</p>
          </li>
           ))}
         
        </ul>
      </div>
    </div>
  );
};

export default TopNews;
