import "../HomePage/HomePage.scss";
import React from "react";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import Article from "../../components/Article/Article";
import Comment from "../../components/Comment/Comment";
import SideVideos from "../../components/SideVideos/SideVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// Defines the HomePage component to display video content and related components.

const { REACT_APP_BACKEND_URL } = process.env;
console.log("Testing url", REACT_APP_BACKEND_URL);

const HomePage = () => {
  const [selectedVideoInfo, setSelectedVideoInfo] = useState({});
  const [videosInfo, setVideosInfo] = useState([]);
  useEffect(() => {
    const fetchVideosAll = async () => {
      try {
        const { data } = await axios.get(REACT_APP_BACKEND_URL);
        setVideosInfo(data);
      } catch (error) {
        console.error("Could not fetch videos!", error);
      }
    };
    fetchVideosAll();
  }, []);

  //secting the individual video.
  const { videoId } = useParams();
  useEffect(() => {
    const fetchVideoDetails = async (id) => {
      if (!id) return;
      const url = `${REACT_APP_BACKEND_URL}/${id}`;
      try {
        const { data } = await axios.get(url);
        setSelectedVideoInfo(data);
      } catch (error) {
        console.error("Could not fetch video details!", error);
      }
    };
    const defaultVideoId = videosInfo.length > 0 ? videosInfo[0].id : null;
    fetchVideoDetails(videoId || defaultVideoId);
  }, [videoId, videosInfo]);

  return (
    <div>
      {/* Renders the selected video's details */}
      <SelectedVideo selectedVideoInfo={selectedVideoInfo} />

      {/* Container for comments and related videos */}
      <div className="aside__videos">
        {/* Section for displaying the article and comments related to the selected video */}
        <div className="aside__comment">
          <Article selectedVideoInfo={selectedVideoInfo} 
            />
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
