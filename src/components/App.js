import React, {useState} from 'react';
import video from "../data/video.js";
import VideoDisplay from "./Video.js";
import Header from './Header.js';
import CommentList from './CommentList.js';


function App() {
  const [videos, setVideos] =useState(video)
  const [showComments, setShowComments] = useState(true)


  const handleShowComments = () => {
    setShowComments(comments => !comments)
  }

  return (
    <div  className="App" >
      <VideoDisplay {...video} />
      <Header onHandleShowComments={handleShowComments} 
      showComments={showComments}
      {...videos} />
      {showComments ? <CommentList {...videos} /> : null}
    </div>
  );
}

export default App;
