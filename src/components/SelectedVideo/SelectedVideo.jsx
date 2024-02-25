import "./SelectedVideo.scss";
import { ReactComponent as EyeIcon } from '../../assets/Icons/likes.svg';
import { ReactComponent as HeartIcon } from '../../assets/Icons/views.svg';

const SelectedVideo = ({ selectedVideoInfo, dateAndTimeOfComment }) => {
  return (
    <main className="main">
      <video
        className="video"
        poster={selectedVideoInfo.image}
        controls
      ></video>
      <section>
        <div className="article">
          <h2 className="article__title">{selectedVideoInfo.title}</h2>
          <div className="article__divide"></div>
          <div className="article__nameLikesDate">
            <div className="article__stats">
              <h3 className="article__author">By {selectedVideoInfo.channel}</h3>
              <p className="article__date">
                {dateAndTimeOfComment(selectedVideoInfo.timestamp)}
              </p>
            </div>
            <div className="article__stats">
              <span className="article__views">
                <HeartIcon /> {selectedVideoInfo.views} views
              </span>
              <span className="article__likes">
                <EyeIcon /> {selectedVideoInfo.likes} likes
              </span>
            </div>
          </div>
          <div className="article__divide"></div>

          <p className="article__content">
            {selectedVideoInfo.description} {/* Use dynamic description */}
          </p>
        </div>
      </section>
    </main>
  );
};

export default SelectedVideo;
