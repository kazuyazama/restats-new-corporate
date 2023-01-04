
import ContactButton from "../Atoms/ContactButton";

import ListItem from "../Atoms/ListItem";

const PcNav = () => {
  return (
    <nav className="font-Roboto">
      <ul
        className={`flex justify-evenly gap-12 items-center cursor-pointer  text-gray-100 `}
      >
        <ListItem borderWidth={"before:w-14"} to={"/about"}>
          ABOUT
        </ListItem>

        <ListItem borderWidth={"before:w-16"} to={"/service"}>
          SERVICE
        </ListItem>

        <ListItem borderWidth={"before:w-20"} to={"/company"}>
          COMPANY
        </ListItem>

        <ListItem borderWidth={"before:w-[70px]"} to={"/partner"}>
          PARTNER
        </ListItem>

        <ListItem borderWidth={"before:w-[70px]"} to={"/contact"}>
          CONTACT
        </ListItem>

        
      </ul>
    </nav>
  );
};

export default PcNav;
