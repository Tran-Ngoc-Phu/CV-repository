import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h2>Oops! It's A Dead End</h2>
        <button className="btn-primary">back home</button>
      </div>
    </div>
  );
};

export default Error;
