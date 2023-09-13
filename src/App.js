// import logo from './logo.svg';
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
