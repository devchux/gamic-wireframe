import React from "react";
import { useNavigate } from "react-router-dom";
import IntroCard from "../../components/cards/intro";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className="intro-page">
      <div className="intro-content-wrapper">
        <div className="intro-cards-wrapper">
          <IntroCard
            image="/images/manager.png"
            buttonText="Continue"
            title="Manager"
            onButtonClick={() =>
              navigate("/login", { state: { type: "manager" } })
            }
          />
          <IntroCard
            image="/images/user.png"
            buttonText="Continue"
            title="User"
            onButtonClick={() => navigate("/user")}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
