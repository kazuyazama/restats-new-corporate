import { useInView } from "@react-spring/web";
import TopTitleText from "../Atoms/TopTitleText";
import ScrollFade from "../Organisms/ScrollFade";

const TopParther = () => {
  return (
    // 更新するときは,TopTitleTextのtopと改修中コメントタグのgridとplaceitemsを削除
    <div className="relative mx-auto grid max-w-screen-xl grid-cols-2 justify-center  ">
      <TopTitleText
        after="after:content-['パートナー募集について']"
        top="-top-36 lg:-top-36"
      >
        Partner
      </TopTitleText>
      <div className="col-span-2 grid  place-items-center text-3xl font-semibold">
        <ScrollFade>現在改修中です</ScrollFade>
      </div>
    </div>
  );
};

export default TopParther;
