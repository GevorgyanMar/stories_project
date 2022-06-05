import React, { useEffect, useState } from "react";
import axios from "axios";
import { MAIN_URL } from "../Utilities";
import Story from "./Story";
import Header from "../Components/Header/Header";
import FiltersBehavior from "../FiltersBehaviour/FiltersBehavior";
import StoriesTypes from "../Components/StoriesTypes/StoriesTypes";

const GetStory = () => {
  const [data, setData] = useState([]);
  const [openFilterBar, setOpenFilterBar] = useState(false);
  const limit = 8;
  const [storeLength, setStoreLength] = useState(limit);
  const [languages, setLanguages] = useState("en");
  const [order, setOrder] = useState("top");
  const [pageToken, setPageToken] = useState(data?.next_page_token);

  useEffect(() => {
    setPageToken(data?.next_page_token);
  }, [data?.next_page_token]);

  const fetchData = async () => {
    try {
      const { data: response } =
        await axios.get(`${MAIN_URL}limit=${limit}&languages=${languages}&order=${order}&page_token=${pageToken}
      `);

      setData(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [languages, order]);

  const getLanguagesHandler = (value) => {
    setLanguages(value.value);
  };

  const getOrderHandler = (value) => {
    setOrder(value.value);
  };

  const openFilterBlock = () => {
    setOpenFilterBar(!openFilterBar);
  };

  return (
    <div className="main-container">
      <Header />
      <FiltersBehavior openFilterBlock={openFilterBlock} />
      {openFilterBar && (
        <StoriesTypes
          getLanguagesHandler={getLanguagesHandler}
          getOrderHandler={getOrderHandler}
          order={order}
          languages={languages}
        />
      )}
      <Story
        mainDataData={data}
        limit={limit}
        fetchData={fetchData}
        storeLength={storeLength}
        setStoreLength={setStoreLength}
      />
    </div>
  );
};

export default GetStory;
