import React from "react";
import { languagesList, orderList } from "../../List";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import "./index.scss";

const StoriesTypes = ({ getLanguagesHandler, getOrderHandler, order }) => {
  return (
    <div className="stories-types-flex">
      <Dropdown
        dropDownList={orderList}
        onClickItem={getOrderHandler}
        defaultTitle="order"
        defaultValue={order}
      />

      <Dropdown
        dropDownList={languagesList}
        onClickItem={getLanguagesHandler}
        defaultTitle="languagesList"
        defaultValue="English"
      />
      <Button text="Reset" />
    </div>
  );
};

export default StoriesTypes;
