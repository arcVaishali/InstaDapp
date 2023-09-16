import React from "react";
import PostInfo from "./PostInfo";
import UserInfoButton from "./UserInfoButton";
import Creation from "./Creation";

const PostCard = () => {
  return (
    <div className="post-box">
     <Creation/>
      <div className="post-info">
        <UserInfoButton/>
        <PostInfo/>
      </div>
    </div>
  );
};

export default PostCard;
