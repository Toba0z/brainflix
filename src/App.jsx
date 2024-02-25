// App.jsx
import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Comment from "./components/Comment/Comment";
import SideVideos from "./components/SideVideos/SideVideos";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";

import videosDetailsData from "./Data/video-details.json";

const App = () => {
  const [selectedVideoInfo, setSelectedVideoInfo] = useState(
    videosDetailsData[0]
  );
  const [videosInfo, setVideosInfo] = useState(videosDetailsData); // Unused setter function can be removed if not used elsewhere

  const handleVideoSelect = (videoId) => {
    const newSelectedVideo = videosInfo.find((video) => video.id === videoId);
    setSelectedVideoInfo(newSelectedVideo);
  };
  // Filtering out the selected video from the side videos list
  const sideVideos = videosInfo.filter(
    (video) => video.id !== selectedVideoInfo.id
  );

  //Formating the Dates
  const dateAndTimeOfComment = (date) => {
    const now = new Date();
    const CommentDate = new Date(date);
    const differenceInSeconds = Math.round((now - CommentDate) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} secongds ago`;
    } else if (differenceInSeconds < 3600) {
      return `${Math.round(differenceInSeconds / 60)} minutes ago`;
    } else if (differenceInSeconds < 86400) {
      return `${Math.round(differenceInSeconds / 3600)} minutes ago`;
    } else if (differenceInSeconds < 2592000) {
      // Less than 1 month
      return `${Math.round(differenceInSeconds / 86400)} days ago`;
    } else if (differenceInSeconds < 31104000) {
      // Less than 1 year
      return `${Math.round(differenceInSeconds / 2592000)} months ago`;
    } else {
      return `${Math.round(differenceInSeconds / 31104000)} years ago`;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="asideVideos">
        <SelectedVideo
          selectedVideoInfo={selectedVideoInfo}
          dateAndTimeOfComment={dateAndTimeOfComment}
        />
        <Comment
          selectedVideoInfo={selectedVideoInfo}
          dateAndTimeOfComment={dateAndTimeOfComment}
        />
        <SideVideos
          sideVideos={sideVideos}
          handleVideoSelect={handleVideoSelect}
        />
      </div>
    </div>
  );
};

export default App;
