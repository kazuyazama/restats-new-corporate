
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";
import AnimeImage from "../Organisms/AnimeImage";

const TopCompany = () => {
  return (
      <div className="flex flex-col lg:flex-row  justify-center max-w-screen-xl mx-auto relative ">
        <div className=" basis-1/2 mb-32 lg:mb-0">
          <TopTitleText after="after:content-['会社情報']" top="top-0">Company</TopTitleText>
        
        </div>
        <div className="basis-full space-y-4 ">
          <AnimeImage  bg="bg-machida" title="From Machida to the World" height="h-80 lg:h-[70vh]" path="/company" />
        </div>
        <div className="absolute right-0 -bottom-10 -translate-x-12">
          <MoreButton
            borderWidth="before:w-[59px]"
            color="black"
            path="/company"
          >
            MORE
          </MoreButton>

          </div>
      </div>
  );
};

export default TopCompany;
