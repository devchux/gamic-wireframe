import React from "react";
import { useNavigate } from "react-router-dom";
import IntroCard from "../../components/cards/intro";

const Channel = () => {
  const navigate = useNavigate();
  return (
    <div className="intro-page">
      <div className="intro-content-wrapper">
        <div className="intro-cards-wrapper">
          <IntroCard
            channel
            image="/images/dev.jpg"
            buttonText="Continue"
            title="Don J. Channel"
            channelId="OLAK5uy_lFWs"
            onButtonClick={() => navigate("/manager")}
          />
        </div>
      </div>
    </div>
  );
};

export default Channel;
