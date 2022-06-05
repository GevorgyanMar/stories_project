import React from "react";
import "./button.scss";

const Button = ({ text, icon, onClick, customClass }) => {
  return (
    <div className={`btn-wrapper ${customClass}`}>
      <button onClick={onClick}>
        {icon ? <img src={icon} alt="" /> : ""}
        <p>{text}</p>
      </button>
    </div>
  );
};

export default Button;
