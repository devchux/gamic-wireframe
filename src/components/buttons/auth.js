import React from "react";

const AuthButton = ({ title, icon, className, ...rest }) => {
  return (
    <button {...rest} className={`auth-button full-width ${className || ""}`}>
      <img src={`/images/${icon || "google"}.png`} alt="" /> {title}
    </button>
  );
};

export default AuthButton;
