import React from "react";
import ConnectWallet from "./ConnectWallet";
import AddPostButton from "./AddPostButton";

const MainHeader = () => {
  return (
    <div className="header">
      <div className="search">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Search" name="" id="" />
      </div>
      <div className="header-content">
        <i className="ri-notification-4-fill"></i>
        <i className="ri-mail-unread-fill"></i>

        <AddPostButton/>
        <ConnectWallet/>
        
      </div>
    </div>
  );
};

export default MainHeader;
