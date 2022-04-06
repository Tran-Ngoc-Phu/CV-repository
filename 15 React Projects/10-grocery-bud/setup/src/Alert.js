import React, { useEffect } from "react";

const Alert = (props) => {
  const { message, isError } = props;
  return (
    <div className="alert">
      <p className={isError ? "alert-danger" : "alert-success"}>{message}</p>
    </div>
  );
};

export default Alert;
