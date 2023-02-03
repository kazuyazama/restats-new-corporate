import { useInView } from "@react-spring/web";
import TopTitleText from "../Atoms/TopTitleText";

const TopParther = () => {
  const [ref, inView] = useInView({
    rootMargin: "-10% 0%",
    once: true,
  });
  return (
    // 更新するときは,TopTitleTextのtopと改修中コメントタグのgridとplaceitemsを削除
    <div
      ref={ref}
      className="relative mx-auto grid max-w-screen-xl grid-cols-2 justify-center  "
    >
      <TopTitleText
        after="after:content-['パートナー募集について']"
        top="-top-36 lg:-top-36"
      >
        Partner
      </TopTitleText>
      {inView && (
        <div className="col-span-2 grid animate-fade-in-bottom place-items-center text-3xl font-semibold">
          現在改修中です
        </div>
      )}
    </div>
  );
};

export default TopParther;
