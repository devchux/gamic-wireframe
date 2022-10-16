import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/button";
import Profile from "../../components/partials/profile";

const User = () => {
  const [s, setS] = useState(true);
  return (
    <div className="user-page flex">
      {s && (
        <div className="notify">
          <p>
            <Link to="/manager">Don Jazzy uploaded a new video</Link>
          </p>
          <Button fit className="close-button" onClick={() => setS(false)}>
            x
          </Button>
        </div>
      )}
      <Profile
        type="User"
        name="Shola Albert"
        location="USA,Illinoise, Chicago"
        username="tech_bro_1"
        id={localStorage.getItem("cred_id")?.slice(0, 11) || "xxxxxxxxxx"}
      />
    </div>
  );
};

export default User;
