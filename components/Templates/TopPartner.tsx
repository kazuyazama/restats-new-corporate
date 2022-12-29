import TopTitleText from "../Atoms/TopTitleText";

const TopParther = () => {
  return (
    // 更新するときは,TopTitleTextのtopと改修中コメントタグのgridとplaceitemsを削除
    <div className="grid grid-cols-2 justify-center max-w-screen-xl mx-auto relative ">
          <TopTitleText after="after:content-['パートナー募集について']" top="-top-24 lg:top-0">Partner</TopTitleText>
        

        <div className="text-3xl font-semibold col-span-2 grid place-items-center">現在改修中です</div>
        
      </div>
  );
};

export default TopParther;
