import React from "react";
import { Link } from "react-router-dom";

const AddPostButton = () => {
  return (
    <Link to="/post" className="btn">
      <i className="ri-add-circle-fill"></i>
      <div className="btn-text">Add Photo</div>
    </Link>
  );
};

export default AddPostButton;
