import "./Article.scss";
// Import SVG icons as React components for easy integration and styling within JSX
import { ReactComponent as EyeIcon } from "../../assets/Icons/likes.svg";
import { ReactComponent as HeartIcon } from '../../assets/Icons/views.svg';

// Define the Article functional component with props for selected video information and a date formatting function
const Article = ({ selectedVideoInfo, dateAndTimeOfComment }) => {
  // Render method returning JSX
  return (
    // Container for the article content
    <div className="article">
      {/* Displaying the title of the selected video */}
      <h2 className="article__title">{selectedVideoInfo.title}</h2>
      
      {/* A decorative divider */}
      <div className="article__divideone"></div>
      
      {/* Container for author/channel info, video statistics like views and likes */}
      <div className="article__nameLikesDate">
        {/* Container for the author's name and the video's upload date */}
        <div className="article__stats">
          <h3 className="article__author">By {selectedVideoInfo.channel}</h3>
          <p className="article__date">
            {dateAndTimeOfComment(selectedVideoInfo.timestamp)} {/* Formatting the video's timestamp */}
          </p>
        </div>
        
        {/* Container for displaying video views and likes using imported SVG icons */}
        <div className="article__stats">
          <span className="article__views">
            <HeartIcon /> {selectedVideoInfo.views} views
          </span>
          <span className="article__likes">
            <EyeIcon /> {selectedVideoInfo.likes} likes
          </span>
        </div>
      </div>
      
      {/* Another decorative divider */}
      <div className="article__divide"></div>

      {/* Displaying the description of the selected video */}
      <p className="article__content">
        {selectedVideoInfo.description} {/* Dynamically inserted video description */}
      </p>
    </div>
  );
};

// Export the Article component for use in other parts of the application
export default Article;
