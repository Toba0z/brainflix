// App.jsx
import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Comment from "./components/Comment/Comment";
import SideVideos from "./components/SideVideos/SideVideos";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import Article from "./components/Article/Article";
import videosDetailsData from "./Data/video-details.json";

const App = () => {
  // State for the currently selected video, initialized to the first video from the videosDetailsData array
  const [selectedVideoInfo, setSelectedVideoInfo] = useState(videosDetailsData[0]);

  // State for storing the list of all videos
  const [videosInfo, setVideosInfo] = useState(videosDetailsData);

  // Function to handle selection of a new video
  const handleVideoSelect = (videoId) => {
    // Finds the video in the videosInfo array by its ID and updates the selectedVideoInfo state
    const newSelectedVideo = videosInfo.find((video) => video.id === videoId);
    setSelectedVideoInfo(newSelectedVideo);
  };

  // Filters out the currently selected video from the videosInfo array for side display
  const sideVideos = videosInfo.filter(
    (video) => video.id !== selectedVideoInfo.id
  );

  // Function to format the date and time of comments into a human-readable format
  const dateAndTimeOfComment = (date) => {
    const now = new Date();
    const CommentDate = new Date(date);
    const differenceInSeconds = Math.round((now - CommentDate) / 1000);

    // Converts the time difference into a readable format (seconds, minutes, days, months, years)
    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
      return `${Math.round(differenceInSeconds / 60)} minutes ago`;
    } else if (differenceInSeconds < 86400) {
      return `${Math.round(differenceInSeconds / 3600)} hours ago`;
    } else if (differenceInSeconds < 2592000) {
      return `${Math.round(differenceInSeconds / 86400)} days ago`;
    } else if (differenceInSeconds < 31104000) {
      return `${Math.round(differenceInSeconds / 2592000)} months ago`;
    } else {
      return `${Math.round(differenceInSeconds / 31104000)} years ago`;
    }
  };

  // Render method for the App component
  return (
    <div className="App">
      {/* Renders the header component */}
      <Header />

      {/* Renders the currently selected video component, passing selected video info as props */}
      <SelectedVideo selectedVideoInfo={selectedVideoInfo} />

      {/* Container for the main content aside from the selected video */}
      <div className="aside__videos">
        {/* Container for article and comment components related to the selected video */}
        <div className="aside__comment">
          <Article
            selectedVideoInfo={selectedVideoInfo}
            dateAndTimeOfComment={dateAndTimeOfComment}
          />
          <Comment
            selectedVideoInfo={selectedVideoInfo}
            dateAndTimeOfComment={dateAndTimeOfComment}
          />
        </div>
        {/* Container for displaying side videos, excluding the currently selected video */}
        <div className="aside__videosOnly">
          <SideVideos
            sideVideos={sideVideos}
            handleVideoSelect={handleVideoSelect}
          />
        </div>
      </div>
    </div>
  );
};
// Exporting the App component for use in other parts of the application
export default App;
