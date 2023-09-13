import React from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css";

const Explore = () => {
  return (
    <Link href="#">
      <span class="icon">
        <i class="ri-search-line"></i>
      </span>
      Explore
    </Link>
  );
};

export default Explore;
