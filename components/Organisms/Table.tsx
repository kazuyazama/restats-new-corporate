import TopTitleText from "../Atoms/TopTitleText";

type Props = {
  profile:{
    title: string;
    discription: string[];
  }[],
}

const Table = ({ profile }:Props) => {
  return (
    <table className="table-auto min-w-full border-separate border-spacing-11">
      <thead className="w-full ">
        <tr>
          <th className=" font-normal">
            <TopTitleText top="-top-10" after="after:content-['会社概要']">
              PROFILE
            </TopTitleText>
          </th>
        </tr>
      </thead>


      <tbody className="w-full ">
        {profile.map((li) => (
          <tr
            key={li.title}
            className="flex gap-5 py-5 items-center border-t last:border-y animate-fade-in-bottom  border-black "
          >
            
            <td className="basis-1/3 ">{li.title}</td>

            <td className="basis-full">
              {/* 配列が1つだけの時 */}
              {li.discription.length === 1 ? (
                <p className=" leading-relaxed">{li.discription[0]}</p>
              ) : (
                // 配列が2つの時
                <>
                  <p className=" leading-relaxed">{li.discription[0]}</p>
                  <p className=" leading-relaxed">{li.discription[1]}</p>
                  {/* 配列が3つの時 */}
                  {li.discription.length === 3 && <p className=" leading-relaxed">{li.discription[2]}</p>}
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>


    </table>
  );
};

export default Table;
