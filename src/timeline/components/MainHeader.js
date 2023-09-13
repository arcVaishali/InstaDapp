import React from "react";
import ConnectWallet from "./ConnectWallet";
import AddPostButton from "./AddPostButton";

const MainHeader = () => {
  return (
    <div class="header">
      <div class="search">
        <i class="ri-search-line"></i>
        <input type="text" placeholder="Search" name="" id="" />
      </div>
      <div class="header-content">
        <i class="ri-notification-4-fill"></i>
        <i class="ri-mail-unread-fill"></i>

        <AddPostButton/>
        <ConnectWallet/>
        
      </div>
    </div>
  );
};

export default MainHeader;
