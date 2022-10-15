import React from "react";

const Button = ({ children, className, full, ...rest }) => {
  return (
    <button
      {...rest}
      className={`component-button ${full ? "full-width" : ""} ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
