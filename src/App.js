// import logo from './logo.svg';
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import AddPostDialog from "./dailog/AddPostDialog.js";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage/>} exact></Route>
        <Route path="/post" element={<AddPostDialog/>} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
