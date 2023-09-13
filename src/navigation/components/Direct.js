import React from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css";

const Direct = () => {
  return (
    <Link href="#">
      <span class="icon">
        <i class="ri-send-plane-fill"></i>
      </span>
      Direct
    </Link>
  );
};

export default Direct;
