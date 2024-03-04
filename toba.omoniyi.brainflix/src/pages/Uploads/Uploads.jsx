import "../Uploads/Uploads.scss";
import imageThumbNail from "../../assets/Images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import publicIcon from "../../assets/Icons/publish.svg";

// Defines the Uploads component with navigation and form submission functionality
const Uploads = () => {
  // Use useNavigate hook for redirecting after form submission
  const navigate = useNavigate();

  // Form submission handler: shows alert and navigates to home
  const handleSelectForm = (event) => {
    event.preventDefault();
    alert("Thank you for submitting the form");
    navigate("/");
  };

  // Component's returned JSX, structured for video upload functionality
  return (
    <div className="upload">
      {/* Upload page title */}
      <h1 className="upload__title">Upload Video</h1>
      {/* Decorative divider */}
      <div className="upload__divide"></div>

      {/* Upload form with handlers for submission */}
      <form onSubmit={handleSelectForm} className="upload__form">
        {/* Desktop layout container */}
        <div className="upload__containerAtDesktop">
          {/* Thumbnail upload section */}
          <div className="upload__thumbnailContainer">
            <label htmlFor="videoTitle" className="upload__label">
              VIDEO THUMBNAIL
            </label>
            {/* Thumbnail display */}
            <div className="upload__thumbnailImage">
              <img
                src={imageThumbNail}
                alt="Video Thumbnail"
                className="upload__thumbnail"
              />
            </div>
          </div>

          {/* Input and textarea container for video title and description */}
          <div className="upload__inputAndTextAreaContainer">
            {/* Video title input */}
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
            {/* Video description textarea */}
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

        {/* Form submission buttons */}
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
