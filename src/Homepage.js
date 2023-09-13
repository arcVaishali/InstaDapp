import React from 'react'
import Sidebar from './navigation/pages/Sidebar'
import PostTimeline from './timeline/pages/PostTimeline';

const Homepage = () => {
  return (
    <div className="homepage">
      <Sidebar/>
      <PostTimeline/>
    </div>
  )
}

export default Homepage