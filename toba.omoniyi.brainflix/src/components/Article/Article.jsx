import "./Article.scss";
import { ReactComponent as EyeIcon } from "../../assets/Icons/likes.svg";
import { ReactComponent as HeartIcon } from "../../assets/Icons/views.svg";
import dateAndTimeOfComment from "../../Utils/Utils";
// Defines the Article component which receives selectedVideoInfo as a prop
const Article = ({ selectedVideoInfo }) => {
  // Returns JSX structure for rendering the article section of the video
  return (
    <div className="article">
      {/* Displays the video's title */}
      <h2 className="article__title">{selectedVideoInfo.title}</h2>

      {/* Decorative divider */}
      <div className="article__divide article__divide--one"></div>

      {/* Container for the video's author, publication date, views, and likes */}
      <div className="article__nameLikesDate">
        {/* Container for the author and publication date */}
        <div className="article__stats">
          <h3 className="article__author">By {selectedVideoInfo.channel}</h3>
          {/* Displays the publication date, formatted by the dateAndTimeOfComment function */}
          <p className="article__date">
            {dateAndTimeOfComment(selectedVideoInfo.timestamp)}
          </p>
        </div>

        {/* Container for the views and likes */}
        <div className="article__stats">
          {/* Displays the number of views with an icon */}
          <span className="article__views">
            <HeartIcon /> {selectedVideoInfo.views} views
          </span>
          {/* Displays the number of likes with an icon */}
          <span className="article__likes">
            <EyeIcon /> {selectedVideoInfo.likes} likes
          </span>
        </div>
      </div>

      {/* Another decorative divider */}
      <div className="article__divide"></div>

      {/* Displays the video's description */}
      <p className="article__content">{selectedVideoInfo.description}</p>
    </div>
  );
};
export default Article;
