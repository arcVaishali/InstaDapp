import React from "react";
import "../timeline/pages/PostTimeline.css";

const PrimaryButton = (props) => {
  return (
    <div className="header-content">
      <div className="btn">
        <div className="btn-text">{props.text}</div>
      </div>
    </div>
  );
};

export default PrimaryButton;
