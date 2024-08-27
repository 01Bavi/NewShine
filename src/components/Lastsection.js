import React from "react";
import "../styles/lastsection.css";

const Lastsection = () => {
  return (
    <div className="container">
      <div className="left-section"></div>
      <div className="right-section">
        <div className="grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
        <div className="bottom-section">
          <div className="bottom-left"></div>
          <div className="bottom-right">
            <div className="button"></div>
            <div className="button"></div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Lastsection;
