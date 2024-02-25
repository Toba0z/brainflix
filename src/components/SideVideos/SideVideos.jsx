// SideVideos.jsx
import React from 'react';
import './SideVideos.scss'; // Assume there's corresponding CSS for styling

const SideVideos = ({ sideVideos, handleVideoSelect }) => {
  return (
    <aside className="sidevideos">
      <h4 className="sidevideos__title">Next Video</h4>
      <ul className="sidevideos__list">
        {sideVideos.map(video => (
          <li key={video.id} className="sidevideo__item" onClick={() => handleVideoSelect(video.id)}>
            <img src={video.image} alt={video.title} className="sidevideo__image" />
            <div className="sidevideo__info">
              <h5 className="sidevideo__title">{video.title}</h5>
              <p className="sidevideo__channel">{video.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideVideos;
