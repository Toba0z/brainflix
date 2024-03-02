import "../HomePage/HomePage.scss";
import React from "react";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import Article from "../../components/Article/Article";
import Comment from "../../components/Comment/Comment";
import SideVideos from "../../components/SideVideos/SideVideos";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const HomePage = ({
  setSelectedVideoInfo,
  selectedVideoInfo,
  videosInfo,
  dateAndTimeOfComment,
}) => {
  
  const { videoId } = useParams();
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const brainFlixApiKey = "2515aa87-f829-40de-ade0-d0166853f149";

  useEffect(() => {
    const fetchVideoDetails = async(id)=>{
      const url = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${brainFlixApiKey}`;
    try {
      const { data } = await axios.get(url);
      setSelectedVideoInfo(data);
    } catch (error) {
      console.error("Could not fetch video details!", error);
    }
    }
    fetchVideoDetails(videoId || defaultVideoId);
  }, [videoId]); 



  return (
    <div>
      <SelectedVideo selectedVideoInfo={selectedVideoInfo} />
      <div className="aside__videos">
        <div className="aside__comment">
          <Article
            selectedVideoInfo={selectedVideoInfo}
            dateAndTimeOfComment={dateAndTimeOfComment}
            
          />
          <Comment
            selectedVideoInfo={selectedVideoInfo}
            dateAndTimeOfComment={dateAndTimeOfComment}
            setSelectedVideoInfo = {setSelectedVideoInfo}
          />
        </div>
        <div className="aside__videosOnly">
          <SideVideos
            videosInfo={videosInfo}
            selectedVideoInfo={selectedVideoInfo}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
