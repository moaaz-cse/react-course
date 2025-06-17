import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser,age } = useContext(UserContext);
  return (
    <div className="flex flex-wrap justify-between my-1.5 pl-1.5 pr-1.5 bg-emerald-100 items-center">
      <div className="">
        <img src={LOGO_URL} alt="App Logo" className="h-20 w-20" />
      </div>
      <div>
        <ul className="flex justify-evenly gap-4 items-center">
          <li to="/">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <li>
            <button
              className="bg-pink-500 hover:bg-pink-700 px-4 py-2 rounded-lg"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
