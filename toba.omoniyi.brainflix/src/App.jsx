// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import videosDetailsData from "./Data/video-details.json";
import HomePage from "./pages/HomePage/HomePage";
import Uploads from "./pages/Uploads/Uploads";

const App = () => {
  const [selectedVideoInfo, setSelectedVideoInfo] = useState(
    videosDetailsData[0]
  );
  const [videosInfo, setVideosInfo] = useState(videosDetailsData);
  const handleVideoSelect = (videoId) => {
    const newSelectedVideo = videosInfo.find((video) => video.id === videoId);
    setSelectedVideoInfo(newSelectedVideo);
  };
  const sideVideos = videosInfo.filter(
    (video) => video.id !== selectedVideoInfo.id
  );

  const dateAndTimeOfComment = (date) => {
    const now = new Date();
    const CommentDate = new Date(date);
    const differenceInSeconds = Math.round((now - CommentDate) / 1000);

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
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                selectedVideoInfo={selectedVideoInfo}
                sideVideos={sideVideos}
                handleVideoSelect={handleVideoSelect}
                dateAndTimeOfComment={dateAndTimeOfComment}
              />
            }
          ></Route>
          <Route path="/uploads" element={<Uploads />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
