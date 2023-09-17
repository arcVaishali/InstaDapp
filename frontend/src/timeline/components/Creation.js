import React from "react";
import { useState, useEffect } from "react";
const Creation = () => {
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
  return (
    <>
      {/* {images.map((image, index) => {
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
      })}  */}
    

      <img
        src="https://images.unsplash.com/photo-1688607932168-f4d050f372c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        alt=""
      />
    </>
  );
};

export default Creation;
