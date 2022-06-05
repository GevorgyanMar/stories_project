import React, { useState } from "react";
import arrow from ".././../Assets/icons/arrow.png";
import "./dropDown.scss";

const Dropdown = ({
  dropDownList,
  onClickItem,
  defaultTitle = "",
  defaultValue = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const closeDropDown = () => setIsActive(!isActive);

  return (
    <div className="dropDown-wrapper">
      <div className="dropDown-wrapper-content">
        <div className="dropDown-block" onClick={closeDropDown}>
          <div className="dropDown-title">
            <span>{defaultValue}</span>
            <p>{defaultTitle}</p>
          </div>
          <div className="dropDown-icon">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <nav className={`dropDown-menu ${isActive ? "active" : "inactive"}`}>
          <ul>
            {dropDownList &&
              dropDownList?.map((item, index) => (
                <li key={index} onClick={() => onClickItem(item)}>
                  {item?.name}
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dropdown;
