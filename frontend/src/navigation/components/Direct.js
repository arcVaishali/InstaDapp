import React from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css";

const Direct = () => {
  return (
    <Link href="#">
      <span className="icon">
        <i className="ri-send-plane-fill"></i>
      </span>
      Direct
    </Link>
  );
};

export default Direct;
