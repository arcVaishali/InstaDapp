import React from "react";
import "../profile/UserProfile.css";
import PrimaryButton from "../AppComponents/PrimaryButton";
import {Link} from "react-router-dom"

const NFTInfo = () => {
  const displayInfo = () => {
    const ele = document.getElementById("Info");
    ele.style.display = "none";
  }
  return (
    <div id="Info">
      <div className="popup">
        <div className="popupinfo">
          NFT Information
          <Link onClick={ displayInfo }><PrimaryButton text="Back"/></Link>
        </div>
      </div>
    </div>
  );
};

export default NFTInfo;
