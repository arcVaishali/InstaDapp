import React from "react";
import RemixIco from "../navigation/components/RemixIco";
// import "./AddPostDialogStyle.css";
import { Link } from "react-router-dom";
import PostInfoDialog from "./PostInfoDialog";

const AddPostDialog = () => {
  return (
    <>
      <RemixIco />
      <div
        style={{
          position: "relative",
          top: "144px",
          left: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          color: "black",
          borderRadius: "20px",
          width: "50vw",
          height: "50vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Select from your computer
          <input
            style={{
              marginLeft: "20px",
              marginTop: "10px",
              padding: "20px",
              border: "1px solid #8080802e",
              borderRadius: "10px",
            }}
            type="file"
          />
        </div>

        <Link
          to="/postinfo"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            borderRadius: "8px",
            background: "linear-gradient(to right , #e2336b , #fcac46)",
            margin: "1rem",
          }}
        >
          Next
        </Link>
      </div>
      
    </>
  );
};

export default AddPostDialog;
