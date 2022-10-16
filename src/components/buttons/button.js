import React from "react";

const Button = ({ children, className, full, fit, ...rest }) => {
  return (
    <button
      {...rest}
      className={`component-button ${full ? "full-width" : ""} ${
        fit ? "fit" : ""
      } ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
