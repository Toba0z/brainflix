import "../HomePage/HomePage.scss";
import React from "react";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import Article from "../../components/Article/Article";
import Comment from "../../components/Comment/Comment";
import SideVideos from "../../components/SideVideos/SideVideos";

// Defines the HomePage component to display video content and related components.
const HomePage = ({ setSelectedVideoInfo, selectedVideoInfo, videosInfo }) => {
  return (
    <div>
      {/* Renders the selected video's details */}
      <SelectedVideo selectedVideoInfo={selectedVideoInfo} />

      {/* Container for comments and related videos */}
      <div className="aside__videos">
        {/* Section for displaying the article and comments related to the selected video */}
        <div className="aside__comment">
          <Article selectedVideoInfo={selectedVideoInfo} />
          <Comment
            selectedVideoInfo={selectedVideoInfo}
            setSelectedVideoInfo={setSelectedVideoInfo}
          />
        </div>

        {/* Section for displaying side videos (related videos) */}
        <div className="aside__videosOnly">
          <SideVideos
            videosInfo={videosInfo}
            selectedVideoInfo={selectedVideoInfo}
            setSelectedVideoInfo={setSelectedVideoInfo}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
