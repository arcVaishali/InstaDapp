import React from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css";

const Explore = () => {
  return (
    <Link href="#">
      <span className="icon">
        <i className="ri-search-line"></i>
      </span>
      Explore
    </Link>
  );
};

export default Explore;
