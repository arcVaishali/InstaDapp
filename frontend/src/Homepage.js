import React from 'react'
import Sidebar from './navigation/pages/Sidebar'
import PostTimeline from './timeline/pages/PostTimeline';
import Signup from './Signup';

const Homepage = () => {
  // function func(){
  //  ele.style.display="flex";
  // }
  // const ele = document.getElementById("signup")
  // ele.addEventListener( onclick , func());
  return (
    <div className="homepage">
      {/* <Signup/> */}
      <Sidebar/>
      <PostTimeline/>
    </div>
  )
}

export default Homepage