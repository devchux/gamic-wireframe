import React from "react";

const Profile = ({ name, type, location, username, id }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-image-name-wrapper">
        <div className="profile-image">
          <h2>
            {name.split(" ")[0][0]} {name.split(" ")[1][0]}
          </h2>
        </div>
        <div className="profile-name-wrapper">
          <h3>{name}</h3>
          <div>
            <p>{type}</p>
            <small>{location}</small>
          </div>
        </div>
      </div>
      <div className="profile-info-wrapper">
        <div className="info">
          <h4>Username</h4>
          <p>{username}</p>
        </div>
        <div className="info">
          <h4>User ID</h4>
          <p>{id}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
