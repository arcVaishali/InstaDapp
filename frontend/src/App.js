// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter , Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import AddPostDialog from "./dailog/AddPostDialog.js";
import PostInfoDialog from "./dailog/PostInfoDialog";
import UserProfile from "./profile/UserProfile";
import Signup from "./Signup";
import Login from "./Login";
import { useEffect, useState } from "react";
// import Axios from "axios";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/homepage" element={<Homepage/>} exact/>
          <Route path="/addpost" element={<PostInfoDialog/>} exact />
          <Route path="/user" element={<UserProfile />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
