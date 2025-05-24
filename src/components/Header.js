import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("header render");

  //If no array dependency in useEffect, the useEffect will be called whenever the Header is rerendered
  useEffect(() => {
    console.log("Header rendered.");
  });
  //If there is empty array dependency in useEffect, the useEffect will be rendered only once when page loaded.
  useEffect(() => {
    console.log("rendered only once.");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
