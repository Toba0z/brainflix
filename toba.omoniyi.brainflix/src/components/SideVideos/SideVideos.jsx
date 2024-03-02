import React from "react";
import "./SideVideos.scss";
import { Link } from "react-router-dom";
const SideVideos = ({ videosInfo, selectedVideoInfo }) => {
  console.log("Video info list:",videosInfo);
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
