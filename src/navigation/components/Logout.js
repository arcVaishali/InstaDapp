import React from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css"

const Logout = () => {
  return (
    <Link href="#">
      <span class="icon">
        <i class="ri-logout-box-r-line"></i>
      </span>
      Logout
    </Link>
  );
};

export default Logout;
