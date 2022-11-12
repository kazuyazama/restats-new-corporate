import { Link as Scroll } from "react-scroll";

const PcNav = () => {
  return (
    <nav>
      <ul className="flex justify-evenly gap-10 items-center">
        <li>
          <Scroll to="top" smooth={true} duration={600} offset={60}>
            TOP
          </Scroll>
        </li>

        <li>
          <Scroll to="about" smooth={true} duration={600} offset={60}>
            ABOUT
          </Scroll>
        </li>
        <li>
          <Scroll to="profile" smooth={true} duration={600} offset={60}>
            PROFILE
          </Scroll>
        </li>
        <li>
          <Scroll to="works" smooth={true} duration={600} offset={60}>
            WORKS
          </Scroll>
        </li>
        <li className="rounded-lg bg-secondary px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring">
          <Scroll to="contact" smooth={true} duration={600} offset={60}>
            CONTACT
          </Scroll>
        </li>
      </ul>
    </nav>
  );
};

export default PcNav;
