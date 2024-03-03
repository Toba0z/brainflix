import "../Uploads/Uploads.scss";
import imageThumbNail from "../../assets/Images/Upload-video-preview.jpg";
import buttonIcon from "../../assets/Icons/upload.svg";
import { useNavigate } from "react-router-dom";
import publicIcon from "../../assets/Icons/publish.svg";

const Uploads = () => {
  const navigate = useNavigate();
  const handleSelectForm = (event) => {
    event.preventDefault();
    alert("Thank you for submitting the form");
    navigate("/");
  };
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__divide"></div>

      <form onSubmit={handleSelectForm} className="upload__form">
        <div className="upload__containerAtDesktop">
          <div className="upload__thumbnailContainer">
            <label htmlFor="videoTitle" className="upload__label">
              VIDEO THUMBNAIL
            </label>
            <div className="upload__thumbnailImage">
              <img
                src={imageThumbNail}
                alt="Video Thumbnail"
                className="upload__thumbnail"
              />
            </div>
          </div>
          
          <div className="upload__inputAndTextAreaContainer">
            <div className="upload__firstInput">
              <label htmlFor="videoTitle" className="upload__labeltwo">
                Title Your Video
              </label>
              <input
                type="text"
                id="videoTitle"
                name="videoTitle"
                placeholder="Add a title to your video"
                className="upload__input"
                required
              />
            </div>
            <div className="upload__secondInput">
              <label htmlFor="videoDescription" className="upload__labeltwo">
                Add A Video Description
              </label>
              <textarea
                id="videoDescription"
                name="videoDescription"
                placeholder="Add a description to your video"
                className="upload__textarea"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="upload__divide"></div>
        <div className="upload__twoButtons">
          <div className="upload__buttonIconStyle">
            <img
              src={publicIcon}
              alt="BrainFlix iconbutton"
              className="upload__buttonIcon"
            />
            <button type="submit" className="upload__buttonOne">
              PUBLISH
            </button>
          </div>
          <button type="submit" className="upload__buttonTwo">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};
export default Uploads;
