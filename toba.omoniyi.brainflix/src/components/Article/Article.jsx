import "./Article.scss";
import { ReactComponent as EyeIcon } from "../../assets/Icons/likes.svg";
import { ReactComponent as HeartIcon } from "../../assets/Icons/views.svg";
import dateAndTimeOfComment from "../../Utils/Utils";
import { useEffect, useState } from "react";
import axios from "axios";

const Article = ({ selectedVideoInfo}) => {
// State management for likes, updating based on selected video information
  const [likes, setLikes] = useState(selectedVideoInfo.likes);

// Effect hook to update likes when the selected video's like count changes
useEffect(()=>{
  setLikes(selectedVideoInfo.likes);
},[selectedVideoInfo.likes]);

// Function to handle like action, updates likes for the current video
    const handleLikeClick = async () => {
      try {
        const response = await axios.put(
          `http://localhost:8088/videos/${selectedVideoInfo.id}/likes`
        );
        setLikes(response.data.likes); // Update likes state with the new count from response
      } catch (error) {
        console.error("Error Liking the video:", error);
      }
    };

  return (
    <div className="article">
      {/* Displays the video's title */}
      <h2 className="article__title">{selectedVideoInfo.title}</h2>

      <div className="article__divide article__divide--one"></div>

      <div className="article__nameLikes-date">
        <div className="article__stats">
          <h3 className="article__author">By {selectedVideoInfo.channel}</h3>
          {/* Displays the publication date, formatted by the dateAndTimeOfComment function */}
          <p className="article__date">
            {dateAndTimeOfComment(selectedVideoInfo.timestamp)}
          </p>
        </div>
        
        <div className="article__stats">
          <span className="article__views">
            <HeartIcon /> {selectedVideoInfo.views} views
          </span>
          <span className="article__likes" onClick={handleLikeClick}>
            <EyeIcon /> {likes} likes
          </span>
        </div>
      </div>
      <div className="article__divide"></div>
      <p className="article__content">{selectedVideoInfo.description}</p>
    </div>
  );
};
export default Article;
