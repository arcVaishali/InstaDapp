import React from "react";
import CountFollower from "../navigation/components/CountFollower";
import CountFollowing from "../navigation/components/CountFollowing";
import CountPost from "../navigation/components/CountPost";
import Profile from "../navigation/components/Profile";
import "./UserProfile.css";
import PostWithStyle from "../timeline/components/PostWithStyle";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-header">
        <div className="user-image">
          <Profile />
        </div>
        <div className="user-info">
          <div className="NFT-info">
            <div className="info">
              <h3>Info1</h3>
              <span>Information</span>
            </div>

            <div className="info">
              <h3>Info1</h3>
              <span>Information</span>
            </div>

            <div className="info">
              <h3>Info1</h3>
              <span>Information</span>
            </div>
          </div>
          <div className="basic-info">
            <CountFollower />
            <CountFollowing />
            <CountPost />
          </div>
        </div>
      </div>

      <div className="post-nfts-areas">
        <div className="style">
          <PostWithStyle />
        </div>
        <div className="style">
          <PostWithStyle />
        </div>
        <div className="style">
          <PostWithStyle />
        </div>
        <div className="style">
          <PostWithStyle />
        </div>
        <div className="style">
          <PostWithStyle />
        </div>
        <div className="style">
          <PostWithStyle />
        </div>
        <div className="style">
          <PostWithStyle />
        </div>
        <div className="style">
          <PostWithStyle />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
