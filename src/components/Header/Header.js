import { LOGO_URL } from "../../utils/constants";

import HeaderClass from "./Header.module.css"
const Header = () => {
  return (
    <div className={HeaderClass.header}>
      <div className={HeaderClass.logo}>
        <img
          src={LOGO_URL}
          alt="App Logo"
          className={HeaderClass.logo}
        />
      </div>  
      <div className={HeaderClass["nav-items"]}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
