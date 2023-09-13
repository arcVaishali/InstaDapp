import React from "react";
import "../pages/Sidebar.css";

const Profile = () => {
  return (
    <div class="profile">
      <div class="profile-img">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />
      </div>
      <div class="name">
        <h1>Dua Lipa</h1>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.kmu6gQyQ55_Bsl05rxexuAHaHn&pid=Api"
          alt=""
        />
      </div>
      <span>@lipa</span>
    </div>
  );
};

export default Profile;
