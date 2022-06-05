import React from "react";
import logo from "../../Assets/icons/logo.png";
import user from "../../Assets/icons/user.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-block">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-auth-icon">
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default Header;
