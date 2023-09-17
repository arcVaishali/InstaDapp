import React from "react";
import { useState, useEffect } from "react";
import "../../navigation/pages/Sidebar.css";
import RemixIco from "../../navigation/components/RemixIco";
import "./PostTimeline.css";
import StoryAdd from "../components/StoryAdd";
import StoryCard from "../components/StoryCard";
import PostCard from "../components/PostCard";
import StoryArea from "../components/StoryArea";
import MainHeader from "../components/MainHeader";
import FeedTitle from "../components/FeedTitle";

const PostTimeline = () => {
  const [images, setImages] = useState([]);
  // =================
  // RETRIEVING POSTS
  // =================
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
  // =================
  // RETRIEVING POSTS
  // =================
  /*
  const getPosts = async () => {
    const url = "http://localhost:3001/posts/Posts";
    const options = {
      method : 'GET'
    }
    try {
      const response = await fetch(url , options );
      console.log(response);
    } catch(error) {
      console.log(error);
    }
  } 
*/
  // =================
  // =================
  // =================

  return (
    <div className="main-home">
      <RemixIco />
      <MainHeader />
      <StoryArea />
      <div className="stories">
        {/* {fetchImage()} */}

        <StoryAdd />

        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>

      <FeedTitle />

      <div className="main-posts">

        <div>
          {images.map((image, index) => {
            return (
              <div key={index}>
                <h2>{image.name}</h2>
                <p>{image.desc}</p>
                <p>{image.img.data}</p>
                <p>{image.img.contentType}</p>
                <img
                  src={`data:${
                    image.img.contentType
                  };base64,${image.img.data.toString("base64")}`}
                  alt={image.name}
                />
              </div>
            );
          })}
        </div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default PostTimeline;
