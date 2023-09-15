import React from 'react'
import "../pages/Sidebar.css"
import Feed from './Feed'
import { Link } from "react-router-dom"
import Explore from './Explore'
import Notification from "./Notification"
import Messages from './Messages';
import Direct from "./Direct";
import Stats from './Stats'
import Settings from './Settings'
import Logout from './Logout'

const Menu = () => {
  return (
    <div className="menu">
        <Feed/>
        <Explore/>
        <Notification/>
        <Messages/>
        <Direct/>
        <Stats/>
        <Settings/>
        <Logout/>
      </div>
  )
}

export default Menu