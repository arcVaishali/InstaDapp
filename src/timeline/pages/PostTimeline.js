import React from 'react'
import "../../navigation/pages/Sidebar.css";
import RemixIco from '../../navigation/components/RemixIco';
import "./PostTimeline.css"
import StoryAdd from '../components/StoryAdd';
import StoryCard from '../components/StoryCard';
import PostCard from '../components/PostCard';
import StoryArea from '../components/StoryArea';
import MainHeader from '../components/MainHeader';
import FeedTitle from '../components/FeedTitle';

const PostTimeline = () => {
  return (
    <div class="main-home">
        <RemixIco/>
        <MainHeader/>
        <StoryArea/>
        <div class="stories">
            <StoryAdd/>
             
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            
        </div>
        
        <FeedTitle/>
       
        <div class="main-posts">
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
           
            
        </div>

    </div>

  )
}

export default PostTimeline