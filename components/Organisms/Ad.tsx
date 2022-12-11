import { Banner } from "../../types/banner.jsx";

const Ad = ({ data }:{data:Banner}) => {
  return (
    <div className="w-full h-40 flex flex-col justify-center items-center ">
        <div className="text-xl font-bold">{data.description}</div>
        <div className="w-full flex items-center justify-center gap-10">
        <img src={data.image.url} alt=""  width={300} />
        <img src={data.url} alt="" />
        
        <div>{data.title}</div>
        </div>
      
      {/* {data.map((data) => (
        <li key={data.createdAt}>
            <div>{data.description}</div>
        </li>
      ))} */}
  </div>
  );
};

export default Ad;
