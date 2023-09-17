import React from "react";
import CountFollower from "../navigation/components/CountFollower";
import CountFollowing from "../navigation/components/CountFollowing";
import CountPost from "../navigation/components/CountPost";
import Profile from "../navigation/components/Profile";
import "./UserProfile.css";
import PostWithStyle from "../timeline/components/PostWithStyle";
import NFTInfo from "../dailog/NFTInfo";
import PrimaryButton from "../AppComponents/PrimaryButton";

const UserProfile = () => {
  const displayNFTInfo = () => {
    const ele = document.getElementById("Info");
    ele.style.display="flex"; 
  }
  return (
    <div className="user-profile">
      <div className="user-header">
        <div className="user-image">
          <Profile />
        </div>
        <div className="user-info">
          <div className="NFT-info">
            <div className="info">
              <h3>5️⃣➕</h3>
              <span>NFTs</span>
            </div>

            <div className="info">
              <h3>Greater Noida</h3>
              <span>💚</span>
            </div>

            <div className="info">
              <h3>Life is beautiful!</h3>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="basic-info">
            <CountFollower />
            <CountFollowing />
            <CountPost />
          </div>
          <div className="basic-info">
            <PrimaryButton text="Following"/>
            <PrimaryButton text="Followers"/>
          </div>
        </div>
      </div>

      <div className="post-nfts-areas">
        <div className="style" onClick={ displayNFTInfo }>
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

        <NFTInfo/>
      </div>
    </div>
  );
};

export default UserProfile;
