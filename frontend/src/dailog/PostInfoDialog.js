import React from "react";
import RemixIco from "../navigation/components/RemixIco";
// import "./AddPostDialogStyle.css";
import { Link } from "react-router-dom";
import Creation from "../timeline/components/Creation";
import PostWithStyle from "../timeline/components/PostWithStyle";

const PostInfoDialog = () => {
  return (
    <>
      <RemixIco />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          top: "10px",
          left: "200px",
          backgroundColor: "#ffffff",
          color: "black",
          borderRadius: "20px",
          width: "70vw",
          // height: "95vh",
        }}
      >
        <div
          style={{
            padding: "20px",
            margin: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              margin: "5px",
            }}
          >
            <label htmlFor="caption">Enter Caption</label>
            <textarea rows="10" type="text" name="caption" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              margin: "5px",
            }}
          >
            <label htmlFor="caption">Info1</label>
            <input type="text" name="caption" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              margin: "5px",
            }}
          >
            <label htmlFor="caption">Info2</label>
            <input type="text" name="caption" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              margin: "5px",
            }}
          >
            <label htmlFor="NFTorNotNFT">
              Do you want to make this creation an NFT?
            </label>
            <input
              style={{ marginLeft: "20px" }}
              type="radio"
              name="NFTorNotNFT"
            />
          </div>
        </div>
        <Link
          to="/"
          style={{
            padding: "10px",
            borderRadius: "8px",
            background:
              "linear-gradient(to right, rgb(226, 51, 107), rgb(252, 172, 70))",
            margin: "1rem",
            textAlign: "center",
            height: "8vh",
            width: "20vw",
            position: "relative",
            top: "415px",
            left: "53px",
          }}
        >
          Submit
        </Link>
      </div>
    </>
  );
};

export default PostInfoDialog;
