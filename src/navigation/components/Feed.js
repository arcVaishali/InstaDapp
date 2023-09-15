import React from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css"

const Feed = () => {
  return (
    <Link href="" className="active">
      <span className="icon">
        <i className="ri-function-line"></i>
      </span>
      Feed
    </Link>
  );
};

export default Feed;
