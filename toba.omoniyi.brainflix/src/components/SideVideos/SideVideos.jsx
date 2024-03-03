import React from "react";
import "./SideVideos.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SideVideos = ({
  videosInfo,
  selectedVideoInfo,
  setSelectedVideoInfo,
}) => {
  const { videoId } = useParams();

  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const brainFlixApiKey = "2515aa87-f829-40de-ade0-d0166853f149";

  useEffect(() => {
    const fetchVideoDetails = async (id) => {
      const url = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${brainFlixApiKey}`;
      try {
        const { data } = await axios.get(url);
        setSelectedVideoInfo(data);
      } catch (error) {
        console.error("Could not fetch video details!", error);
      }
    };
    fetchVideoDetails(videoId || defaultVideoId);
  }, [videoId]);

  return (
    <aside className="sidevideos">
      <h4 className="sidevideos__title">Next Video</h4>
      <ul className="sidevideos__list">
        {videosInfo
          .filter((video) => video.id !== selectedVideoInfo.id)
          .map((video) => (
            <Link key={video.id} to={`/${video.id}`}>
              <li className="sidevideo__item">
                <img
                  src={video.image}
                  alt={video.title}
                  className="sidevideo__image"
                />
                <div className="sidevideo__info">
                  <h5 className="sidevideo__title">{video.title}</h5>
                  <p className="sidevideo__channel">{video.channel}</p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </aside>
  );
};
export default SideVideos;
