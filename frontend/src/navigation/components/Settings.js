import React from "react";
import {Link } from "react-router-dom";
import "../pages/Sidebar.css"

const Settings = () => {
  return (
    <Link href="#">
      <span className="icon">
        <i className="ri-settings-5-line"></i>
      </span>
      Setting
    </Link>
  );
};

export default Settings;
