
import TopTitleText from "../Atoms/TopTitleText";
import AnimeImage from "../Organisms/AnimeImage";

const TopCompany = () => {
  return (
      <div className="flex justify-center max-w-screen-xl mx-auto relative">
        <div className="basis-1/2 ">
          <TopTitleText after="after:content-['会社情報']" top="top-0">Company</TopTitleText>
        
        </div>
        <div className="basis-full space-y-4">
          <AnimeImage  bg="bg-machida" title="From Machida to the World" height="h-[70vh]" path="/company" />
        
        </div>
      </div>
  );
};

export default TopCompany;
