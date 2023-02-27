import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";
import AnimeImage from "../Organisms/AnimeImage";
import ScrollFade from "../Organisms/ScrollFade";

const TopCompany = () => {
  return (
    <div className="relative mx-auto flex  max-w-screen-xl flex-col justify-center lg:flex-row ">
      <div className=" mb-32 basis-1/2 lg:mb-0">
        <TopTitleText after="after:content-['会社情報']" top="top-0">
          Company
        </TopTitleText>
      </div>
      <div className="basis-full  space-y-4">
        <ScrollFade>
          <AnimeImage
            bg="bg-machida"
            title="From Machida to the World"
            height="h-80 lg:h-[70vh]"
            path="/company"
          />
          <div className="absolute right-0 -bottom-10 -translate-x-12">
            <MoreButton
              borderWidth="before:w-[59px]"
              beforeColor="before:border-black"
              afterColor="after:border-black"
              textColor="text-black"
              path="/company"
            >
              MORE
            </MoreButton>
          </div>
        </ScrollFade>
      </div>
    </div>
  );
};

export default TopCompany;
