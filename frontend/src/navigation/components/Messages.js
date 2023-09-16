import React from "react";
import { Link } from "react-router-dom";
import "../pages/Sidebar.css"

const Messages = () => {
  return (
    <Link href="#">
      <span className="icon">
        <i className="ri-mail-unread-line"></i>
      </span>
      Messages
    </Link>
  );
};

export default Messages;
