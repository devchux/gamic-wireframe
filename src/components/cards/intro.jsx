import React from "react";
import Button from "../buttons/button";

const IntroCard = ({ image, title, buttonText, onButtonClick }) => {
  return (
    <div className="intro-card">
      <div className="image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <Button full onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default IntroCard;
