import React from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css";

const Stats = () => {
  return (
    <Link href="#">
      <span class="icon">
        <i class="ri-bar-chart-2-fill"></i>
      </span>
      Stats
    </Link>
  );
};

export default Stats;
