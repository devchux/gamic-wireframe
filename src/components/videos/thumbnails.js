import React from "react";

const Thumbnails = ({ image, title, views, likes, isNew, onClick }) => {
  return (
    <div className="video-thumbnail" onClick={onClick}>
      <div className="image-wrapper">
        <img src={image} alt="" />
        {isNew && <div className="new-tag">NEW</div>}
      </div>
      <div className="video-thumbnail-content">
        <h4>{title}</h4>
        <p>
          {views} views <b /> {likes} likes
        </p>
      </div>
    </div>
  );
};

export default Thumbnails;
