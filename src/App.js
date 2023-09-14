// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter , Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import AddPostDialog from "./dailog/AddPostDialog.js";
import PostInfoDialog from "./dailog/PostInfoDialog";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/addpost" element={<AddPostDialog />} exact />
          <Route path="/postinfo" element={<PostInfoDialog />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
