import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicIcon from "@mui/icons-material/Mic";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const link = {
    textDecoration: "none",
    color: "#FFF",
  };

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* logo here */}
        <MicIcon className="header__micIcon" />
        <SearchOutlinedIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} style={link}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}{" "}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign-Out" : "Sign-In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" style={link}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to={"/checkout"} style={link}>
          <div className="header__optionBasket">
            <ShoppingBasketOutlinedIcon className="header__optionBasketIcon" />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
