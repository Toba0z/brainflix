import { Link } from "react-router-dom";
import "../Uploads/Uploads.scss";

const Uploads = () => {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <label htmlFor="videoTitle" className="upload_label">
        VIDEO THUMBNAIL
      </label>
      <img
        src="thumbnail.jpg"
        alt="Video Thumbnail"
        className="upload__thumbnail"
      />

      <form className="upload__form">
        <label htmlFor="videoTitle" className="upload_label">
          Title Your Video
        </label>
        <input
          type="text"
          id="videoTitle"
          name="videoTitle"
          placeholder="Add a title to your video"
          className="upload-form__input"
        />

        <label htmlFor="videoDescription" className="upload-form__label">
          Add A Video Description
        </label>
        <textarea
          id="videoDescription"
          name="videoDescription"
          placeholder="Add a description to your video"
          className="upload-form__textarea"
        ></textarea>
        <Link to="/">
          <button type="submit" className="btn btn--publish">
            PUBLISH
          </button>
        </Link>

        <Link to="/">
          <button type="submit" className="btn btn--publish">
            CANCEL
          </button>
        </Link>
      </form>
    </div>
  );
};
export default Uploads;
