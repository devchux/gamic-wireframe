import React from "react";
import Button from "../buttons/button";

const IntroCard = ({
  image,
  title,
  buttonText,
  onButtonClick,
  channel,
  channelId,
}) => {
  return (
    <div className={`intro-card ${channel ? "channel" : ""}`}>
      <div className="image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        {channel && <p>{channelId}</p>}
        <Button full onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default IntroCard;
