import React from "react";
import { Link } from "react-router-dom";
import NFTInfoButton from "./NFTInfoButton";
import ExternalCheckoutLink from "./ExternalCheckoutLink";

const PostInfo = () => {
  return (
    <div className="likes">
      <i className="ri-heart-line"></i>
      <span>84.4k</span>
      <i className="ri-chat-3-line"></i>
      <span>88</span>
     <NFTInfoButton/>
     <ExternalCheckoutLink/>
    </div>
  );
};

export default PostInfo;
