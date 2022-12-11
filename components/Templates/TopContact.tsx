import ArrowButton from "../Atoms/ArrowButton";
import ContactButton from "../Atoms/ContactButton";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";

const TopContact = () => {
  return (
    <div className=" py-40 bg-gray-200">
      <div className="grid grid-cols-2  max-w-screen-xl mx-auto items-center ">
        <div className=" ">
       <TopTitleText title="Contact" after="お問い合わせ" />
    

        </div>
        <div className="group flex items-center justify-center">

          <div className="w-1/2 h-20 bg-secondary flex items-center justify-center cursor-pointer group-hover:bg-accent duration-300 ">
            <div className="z-10">
        <MoreButton borderWidth="before:w-32" color="white" path="/company" >お問い合わせ</MoreButton>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TopContact;
