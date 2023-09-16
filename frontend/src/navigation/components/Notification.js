import React from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css"

const Notification = () => {
  return (
    <Link href="#">
      <span className="icon">
        <i className="ri-notification-4-line"></i>
      </span>
      Notification
    </Link>
  );
};

export default Notification;
