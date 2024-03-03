import "../HomePage/HomePage.scss";
import React from "react";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import Article from "../../components/Article/Article";
import Comment from "../../components/Comment/Comment";
import SideVideos from "../../components/SideVideos/SideVideos";

const HomePage = ({ setSelectedVideoInfo, selectedVideoInfo, videosInfo }) => {
  return (
    <div>
      <SelectedVideo selectedVideoInfo={selectedVideoInfo} />
      <div className="aside__videos">
        <div className="aside__comment">
          <Article selectedVideoInfo={selectedVideoInfo} />
          <Comment
            selectedVideoInfo={selectedVideoInfo}
            setSelectedVideoInfo={setSelectedVideoInfo}
          />
        </div>
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
