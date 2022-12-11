
import ContactButton from "../../Atoms/ContactButton";

import ListItem from "../../Atoms/ListItem";

const PcNav = () => {
  return (
    <nav>
      <ul
        className={`flex justify-evenly gap-10 items-center cursor-pointer  text-gray-100 `}
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

        <li>
          <ContactButton>CONTACT</ContactButton>
        </li>
      </ul>
    </nav>
  );
};

export default PcNav;
