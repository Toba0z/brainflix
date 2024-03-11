import React from "react";
import "./SideVideos.scss";
import { Link } from "react-router-dom";

const SideVideos = ({videosInfo,selectedVideoInfo}) => {
  // JSX for rendering the side videos list
  return (
    <aside className="sidevideos">
      <h4 className="sidevideos__title">Next Video</h4>{" "}
      {/* Title for the side videos section */}
      <ul className="sidevideos__list">
        {videosInfo
          .filter((video) => video.id !== selectedVideoInfo.id) // Filters out the currently selected video
          .map((video) => (
            <Link
              key={video.id}
              to={`/${video.id}`}
              className="sidevideos__link"
            >
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
