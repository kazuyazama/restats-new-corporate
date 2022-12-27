import ContactButton from "../Atoms/ContactButton";
import MoreButton from "../Atoms/MoreButton";
import TopTitleText from "../Atoms/TopTitleText";

const TopContact = () => {
  return (
    <div className="grid lg:grid-cols-2  max-w-screen-xl mx-auto items-center relative ">
      <div className=" ">
        <TopTitleText
          after="after:content-['お問い合わせ']"
          top="-top-16 lg:top-0"
        >
          Contact
        </TopTitleText>
      </div>
      <div className="group flex items-center justify-center translate-y-12 lg:translate-y-0 ">
        <ContactButton width="w-2/3 lg:w-1/2" height="h-20" path="/contact">
          <MoreButton borderWidth="before:w-32" color="black" path="/company">
            お問い合わせ
          </MoreButton>
        </ContactButton>

        {/* <button className="w-1/2 h-20 rounded-3xl bg-secondary flex items-center justify-center cursor-pointer relative overflow-hidden before:absolute before:w-full before:h-full before:-left-[100%] before:bg-accent  before:inset-0 before:duration-300  before:group-hover:left-0   "> */}

        {/* </button> */}
      </div>
    </div>
  );
};

export default TopContact;
