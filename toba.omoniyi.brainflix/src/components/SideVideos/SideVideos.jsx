import React from "react";
import "./SideVideos.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// SideVideos component definition with props for video information and state-setting function
const SideVideos = ({
  videosInfo,
  selectedVideoInfo,
  setSelectedVideoInfo,
}) => {
  // Extracts the videoId from the URL parameters
  const { videoId } = useParams();

  // Defines a default video ID to use as a fallback
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  // API key for accessing the video details
  const brainFlixApiKey = "2515aa87-f829-40de-ade0-d0166853f149";

  // useEffect hook to fetch details of the current or default video when the component mounts or videoId changes
  useEffect(() => {
    const fetchVideoDetails = async (id) => {
      const url = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${brainFlixApiKey}`;
      try {
        const { data } = await axios.get(url);
        setSelectedVideoInfo(data); // Updates the state with fetched video details
      } catch (error) {
        console.error("Could not fetch video details!", error); // Error handling
      }
    };
    fetchVideoDetails(videoId || defaultVideoId); // Fetches details for either the current video or a default one
  }, [videoId]); // Dependency array with videoId to trigger effect on its change

  // JSX for rendering the side videos list
  return (
    <aside className="sidevideos">
      <h4 className="sidevideos__title">Next Video</h4>{" "}
      {/* Title for the side videos section */}
      <ul className="sidevideos__list">
        {videosInfo
          .filter((video) => video.id !== selectedVideoInfo.id) // Filters out the currently selected video
          .map((video) => (
            <Link key={video.id} to={`/${video.id}`} className="sidevideos__link">
              {/* Creates a link for each video */}
              <li className="sidevideos__item">
                <img
                  src={video.image} // Displays the video thumbnail
                  alt={video.title} // Provides alt text for the image
                  className="sidevideos__image"
                />
                <div className="sidevideos__info">
                  <h5 className="sidevideos__title">{video.title}</h5>{" "}
                  {/* Video title */}
                  <p className="sidevideos__channel">{video.channel}</p>{" "}
                  {/* Video channel name */}
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </aside>
  );
};
export default SideVideos;
