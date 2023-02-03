import { useInView } from "@react-spring/web";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";
import Card from "../Organisms/Card";

const TopService = () => {
  const [ref, inView] = useInView({
    rootMargin: "-10% 0%",
    once: true,
  });

  return (
    <div
      className="relative mx-auto mt-20 grid max-w-screen-xl items-center gap-20 lg:grid-cols-3 lg:gap-8"
      ref={ref}
    >
      <TopTitleText after="after:content-['事業内容']" top="-top-32">
        Service
      </TopTitleText>

      {inView && (
        <div className="relative animate-fade-in-bottom ">
          <Card
            title="マンションwifiネット"
            discription="日本で唯一の集合住宅向けインターネット回線検索ポータルサイト。マンションwifiネットを運営しています"
            src="/マンションwifiネット.jpg"
            path="/service/#manshon-wifi"
            bg="bg-manshonwifi"
            height="h-[30vh] lg:h-[47vh]  "
          />
          <div className="absolute right-0 -bottom-10 -translate-x-12">
            <MoreButton
              borderWidth="before:w-[59px]"
              beforeColor="before:border-black"
              afterColor="after:border-black"
              textColor="text-black"
              path="/service"
            >
              MORE
            </MoreButton>
          </div>
        </div>
      )}
      {inView && (
        <div className="relative animate-fade-in-bottom [animation-delay:300ms] ">
          <Card
            title="Web開発"
            discription="日本ではまだあまり利用されていない最新の技術を用いて、Webサイト、Webアプリケーションを開発しています"
            src="/webDevelopment.webp"
            path="/service/#web"
            bg="bg-web-development"
            height={`h-[30vh] lg:h-[47vh] `}
          />
          <div className="absolute right-0 -bottom-10 -translate-x-12">
            <MoreButton
              borderWidth="before:w-[59px]"
              beforeColor="before:border-black"
              afterColor="after:border-black"
              textColor="text-black"
              path="/service"
            >
              MORE
            </MoreButton>
          </div>
        </div>
      )}
      {inView && (
        <div className="relative animate-fade-in-bottom [animation-delay:600ms]">
          <Card
            title="代理店事業"
            discription="大手キャリア様の販売代理店として活動をしています。また一緒に活動していただける販売パートナー様を募集しています"
            src="/agency.webp"
            path="/service/#agency"
            bg="bg-agency"
            height={`h-[30vh] lg:h-[47vh] `}
          />
          <div className="absolute right-0 -bottom-10 -translate-x-12">
            <MoreButton
              borderWidth="before:w-[59px]"
              beforeColor="before:border-black"
              afterColor="after:border-black"
              textColor="text-black"
              path="/service"
            >
              MORE
            </MoreButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopService;
