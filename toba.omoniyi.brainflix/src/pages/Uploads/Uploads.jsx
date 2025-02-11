import "../Uploads/Uploads.scss";
import imageThumbNail from "../../assets/Images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import publicIcon from "../../assets/Icons/publish.svg";
import { useState } from "react";
import axios from "axios";

const Uploads = () => {
    // Navigation hook and state management for video title and description
  const navigate = useNavigate();
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

    // Handles the change in video title input
  const handleTitleChange = (event) => {
    setVideoTitle(event.target.value);
  };

    // Handles the change in video description input
  const handleDescriptionChange = (event) => {
    setVideoDescription(event.target.value);
  };

  const handleSelectForm = async (event) => {
    event.preventDefault();
    const newVideo = {
      title: videoTitle,
      description: videoDescription,
    };
    try {
      await axios.post("http://localhost:8088/videos", newVideo);
      alert("video successfully uploaded!");
      navigate("/");
    } catch (error) {
      console.error("Error Uploading video", error);
      alert("Failed to upload video.");
    }
    
  };

  return (
        // Video upload form layout
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__divide"></div>
      <form onSubmit={handleSelectForm} className="upload__form">
        <div className="upload__container-desktop">
          <div className="upload__thumbnail-container">
            <label htmlFor="videoTitle" className="upload__label">
              VIDEO THUMBNAIL
            </label>
            <div className="upload__thumbnail-Image">
              <img
                src={imageThumbNail}
                alt="Video Thumbnail"
                className="upload__thumbnail"
              />
            </div>
          </div>

          <div className="upload__input-textarea-container">
          {/* // Input fields for video title and description */}
            <div className="upload__firstinput">
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
                onChange={handleTitleChange}
                value={videoTitle}
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
                onChange={handleDescriptionChange}
                value={videoDescription}
              ></textarea>
            </div>
          </div>
        </div>
        {/* Form submission buttons */}
        <div className="upload__divide"></div>
        <div className="upload__two-buttons">
          <div className="upload__buttonicon-style">
            <img
              src={publicIcon}
              alt="BrainFlix iconbutton"
              className="upload__buttonicon"
            />
            <button type="submit" className="upload__button-one">
              PUBLISH
            </button>
          </div>
          <button type="submit" className="upload__button-two">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};
export default Uploads;
