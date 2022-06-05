import React, { useState } from "react";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import arrow from "../Assets/icons/arrow.png";
import "./story.scss";

const Story = ({
  mainDataData,
  limit,
  fetchData,
  storeLength,
  setStoreLength,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const openDescription = () => {
    setShowDescription(!showDescription);
  };

  const openNewTab = (data) => {
    const { expanded_url } = data;
    window.open(expanded_url);
  };

  return (
    <div className="">
      <InfiniteScroll
        dataLength={limit * limit}
        pullDownToRefreshThreshold={50}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {mainDataData &&
          mainDataData.stories?.map((store, index) => (
            <div key={index} className="story-wrapper">
              <div className="story-title-block">
                <div className="story-images">
                  <img src={store?.domain_cached_large_logo_url} alt="" />
                </div>
                <div className="story-info-box">
                  <h3 onClick={() => openNewTab(store)}>{store?.title}</h3>
                  <div className="story-info">
                    <img src={store.domain_cached_logo_url} alt="" />
                    <span>{store?.domain_name}</span>
                    <span>
                      {moment().endOf("day").fromNow(store?.publishTime)}
                    </span>
                  </div>
                </div>
                <div className="story-score-box">
                  <p>{store?.score + "%"}</p>
                </div>
                <div className="open-description" onClick={openDescription}>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
              {showDescription && (
                <div className="story-description-block">
                  <p>{store?.description}</p>
                </div>
              )}
            </div>
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default Story;
