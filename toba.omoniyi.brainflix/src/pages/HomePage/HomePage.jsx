import "../HomePage/HomePage.scss"
import React from "react";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import Article from "../../components/Article/Article";
import Comment from "../../components/Comment/Comment";
import SideVideos from "../../components/SideVideos/SideVideos";

const HomePage = ({ selectedVideoInfo, sideVideos, handleVideoSelect, dateAndTimeOfComment}) => {
  return (
    <div>
      <SelectedVideo selectedVideoInfo={selectedVideoInfo} />
      <div className="aside__videos">
        <div className="aside__comment">
          <Article selectedVideoInfo={selectedVideoInfo} 
             dateAndTimeOfComment={dateAndTimeOfComment}/>
          <Comment selectedVideoInfo={selectedVideoInfo}
             dateAndTimeOfComment={dateAndTimeOfComment} />
        </div>
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

export default HomePage;
