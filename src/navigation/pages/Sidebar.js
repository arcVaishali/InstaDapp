import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import CountPost from "../components/CountPost";
import RemixIco from "../components/RemixIco";
import CountFollower from "../components/CountFollower";
import CountFollowing from "../components/CountFollowing";
import Menu from "../components/Menu";
import InstaLogo from "../components/InstaLogo";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <RemixIco />
      <InstaLogo />
      <Profile />
     
      <div class="about">
        <CountPost />
        <CountFollower />
        <CountFollowing />
      </div>

      <Menu />
    </div>
  );
};

export default Sidebar;
