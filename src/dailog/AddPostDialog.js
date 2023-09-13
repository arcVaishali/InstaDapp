import React from "react";
import RemixIco from "../navigation/components/RemixIco";
// import "./AddPostDialogStyle.css";
import { Link } from "react-router-dom";

const AddPostDialog = () => {
  return (
    <>
      <RemixIco />
      <div style={{
         display: "flex",
         alignItems:"center",
         justifyContent: "center",
         backgroundColor: "#f8f8f8",
         color:"black",
         borderRadius: "20px",
         width: "50vw",
         height: "50vh"
      }}>
        <div> Select from your computer</div>
        <Link to="/" style={{
          
            display: "flex" ,
            alignItems: "center",
            padding: "10px",
            borderRadius: "8px",
            background: "linear-gradient(to right , #e2336b , #fcac46)",
            margin: "1rem" ,
        }}>
          Select
        </Link>
      </div>
    </>
  );
};

export default AddPostDialog;
