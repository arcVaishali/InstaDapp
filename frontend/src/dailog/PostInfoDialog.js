import React from "react";
import RemixIco from "../navigation/components/RemixIco";
// import "./AddPostDialogStyle.css";
import { Link } from "react-router-dom";
import Creation from "../timeline/components/Creation";
import PostWithStyle from "../timeline/components/PostWithStyle";
import "./postInfoDialog.css";
import { useState, useEffect } from "react";

const PostInfoDialog = () => {
  const [text, setText] = useState({
    name: "",
    desc: "",
    image: null,
  });
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImage() {
      const url = "http://localhost:3001/posts/Posts";
      const options = {
        method: "GET",
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchImage();
  }, []);
  const post = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", text.name);
    formData.append("desc", text.desc);
    formData.append("image", text.image);
    formData.append("mint", text.mint);
    const url = "http://localhost:3001/posts/Posts";
    const options = {
      method: "POST",
      body: formData,
    };
    try {
      const response = await fetch(url, options);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const setPhoto = (e) => {
    setText({ ...text, image: e.target.files[0] });
  };
  return (
    <>
      <RemixIco />
      <div className="container">
        <form
          className="form-box"
          action="/"
          method="POST"
          enctype="multipart/form-data"
        >
          <div className="field">
            Select from your computer
            <input
              className="post-file-input"
              type="file"
              accept=".png, .jpg, .jpeg"
              name="photo"
              onChange={setPhoto}
            />
          </div>
          {/* TITLE/HEADER FOR POST? */}
          <div className="field">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={text.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>

          {/* CAPTION INPUT? */}
          <div className="field">
            <label for="desc">Enter Caption</label>
            <textarea
              rows="10"
              type="text"
              id="desc"
              name="desc"
              value={text.desc}
              onChange={handleChange}
              placeholder="Caption"
              required
            />
          </div>

          {/* DO YOU WANT TO MAKE THIS CREATION?POST NFT?? */}
          <div className="field">
            <label for="mint">Do you want to make this creation an NFT?</label>
            <input
              type="radio"
              id="mint"
              name="mint"
              value="mint"
              style={{ marginLeft: "20px", marginTop:"-15px" }}
              required
            />
          </div>

{/*        OTHER FIELDS--??  
*/}

{/*       <div className="field">
              <label for="caption">Info2</label>
                  <input type="text" name="caption" />
          </div> 
*/}
        <button type="submit" onClick={post} className="submit-button-style">
          <Link to="/homepage">Submit</Link>
        </button>
        </form>
      </div>
    </>
  );
};

export default PostInfoDialog;
