import React, { useRef, useState } from "react";
import Button from "../../components/buttons/button";
import Profile from "../../components/partials/profile";
import Thumbnails from "../../components/videos/thumbnails";

const Manager = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("Not playing");
  const videoRef = useRef(null);
  const toggle = () => setShow(!show);
  const [startTime, setStartTime] = useState(null);

  if (videoRef.current) {
    videoRef.current.onplay = function () {
      setStartTime(new Date());
    };
    videoRef.current.ontimeupdate = function () {
      let elapsedSeconds =
        (new Date().getTime() - startTime?.getTime() || 0) / 1000;
      if (elapsedSeconds > 4) {
        setStatus("Watched");
      } else {
        setStatus("Playing...");
      }
    };
  }
  return (
    <div className="manager-page">
      <div className="manager-page-header">
        <Profile
          type="Manager"
          name="Don Jazzy"
          location="Lagos, Nigeria"
          username="don_jazzy"
          id={localStorage.getItem("cred_id")?.slice(0, 11) || "xxxxxxxxxx"}
        />
      </div>
      <div className="manager-page-content">
        <div className="manager-thumbnail-wrapper">
          <Thumbnails
            isNew
            title="ITST S2 Special Teaser Trailer: I asked Don Jazzy about his iconic tagline-“It’s Don Jazzy again!"
            image="https://i.ytimg.com/vi/4lappsXaFow/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4bLCQ5k-RSOmtmFU-mbNB77B49w"
            views="8K"
            likes="4K"
            onClick={toggle}
          />
          <Thumbnails
            title="Mavins, Crayon, Ayra Starr, LADIPOE, Magixx & Boy Spyce - Overloading (OVERDOSE) [Performance Video]"
            views="32M"
            likes="11M"
            onClick={toggle}
            image="https://i.ytimg.com/vi/v8SNlvR86xc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1bSpdkYRODkljp9aBjbPIIrmx3w"
          />
          <Thumbnails
            title="Adaobi - Official Video by Mavins Ft. Don Jazzy, Reekado Banks, Di'ja, Korede Bello"
            views="56M"
            likes="4M"
            onClick={toggle}
            image="https://i.ytimg.com/vi/f6-gjQQNIlA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSOq4ILg2CJfH9osXY7rXHbqPT5Q"
          />
          <Thumbnails
            title="Iyanya ft. Don Jazzy & Dr Sid - Up 2 Sumting ( Official Music Video )"
            views="7.8M"
            likes="1.2M"
            onClick={toggle}
            image="https://i.ytimg.com/vi/a1Bu3melrbk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvxvVYwXu860INOKWjnyTbLsmJRA"
          />
        </div>
      </div>
      <div className={`video-overlay ${show ? "show" : ""}`}>
        <Button fit onClick={toggle}>
          Close
        </Button>

        <div className="video-content-wrapper">
          <div className="video-wrapper">
            <video id="myVideo" ref={videoRef} controls>
              <source
                src="https://www.w3schools.com/tags/mov_bbb.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/tags/mov_bbb.mp4"
                type="video/ogg"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
          <div className="video-info">
            <h3>
              ITST S2 Special Teaser Trailer: I asked Don Jazzy about his iconic
              tagline-“It’s Don Jazzy again!
            </h3>
            <h4>
              8K views <b /> 4k likes
            </h4>
            <p>{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
