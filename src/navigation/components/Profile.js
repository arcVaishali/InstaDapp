import React from "react";
import "../pages/Sidebar.css";
import {Link} from "react-router-dom";

const Profile = () => {
  return (
    <Link to="/user" className="profile">
      <div className="profile-img">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />
      </div>
      <div className="name">
        <h1 style={{color:"black"}}>Dua Lipa</h1>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.kmu6gQyQ55_Bsl05rxexuAHaHn&pid=Api"
          alt=""
        />
      </div>
      <span style={{color:"black"}}>@lipa</span>
    </Link>
  );
};

export default Profile;
