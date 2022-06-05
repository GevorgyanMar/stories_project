import React from "react";
import Button from "../Components/Button/Button";
import reload from "../Assets/icons/reload.png";
import filter from "../Assets/icons/filter.png";
import "./index.scss";

const FiltersBehavior = ({ openFilterBlock }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="filters-behavior-wrapper">
        <h2>Watchlist Name</h2>
        <div className="filters-reset-btn-block">
          <Button
            text="Refresh"
            onClick={refreshPage}
            icon={reload}
            customClass="filters-reset-btn"
          />
          <Button
            text="Filters"
            icon={filter}
            onClick={openFilterBlock}
            customClass="filters-reset-btn"
          />
        </div>
      </div>
    </>
  );
};

export default FiltersBehavior;
