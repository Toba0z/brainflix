// Comment.jsx
import React from "react";
import "./Comment.scss";
// Import statements to include avatar and comment button icon images from assets
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import commentButtonICon from "../../assets/Icons/add_comment.svg";

// Define the Comment functional component with props for selected video info and date formatting function
const Comment = ({ selectedVideoInfo, dateAndTimeOfComment }) => {
  // Render method returning JSX
  return (
    // Fragment to return a list of siblings without adding extra nodes to the DOM
    <>
      {/* Section for comments */}
      <section className="comment">
        {/* Title displaying the number of comments */}
        <h3 className="comment__title">
          {selectedVideoInfo.comments.length} Comments
        </h3>
        {/* Container for new comment submission */}
        <div className="comment__container">
          {/* Avatar image for the comment section */}
          <img className="comment__avatar" src={avatarImage} alt="Avatar" />
          {/* Form for submitting a new comment */}
          <form className="comment__form" id="comment__form">
            <div className="comment__container-form">
              {/* Label for the comment textarea */}
              <label htmlFor="newComment" className="comment__label-form">
                JOIN THE CONVERSATION
              </label>
              {/* Container for textarea and comment button */}
              <div className="comment__textAreaAndButton">
                {/* Textarea for entering new comment */}
                <textarea
                  className="comment__textarea-form"
                  placeholder="Add a new comment"
                  required
                  id="newComment"
                  name="newComment"
                ></textarea>
                {/* Container for comment button and its icon */}
                <div className="comment__buttonIconStyle">
                  {/* Button to submit the comment */}
                  <button className="comment__upload">COMMENT</button>
                  {/* Icon next to the comment button */}
                  <img
                    src={commentButtonICon}
                    alt="BrainFlix iconbutton"
                    className="comment__buttonIcon"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Container for displaying existing comments */}
        <div className="existing__comments">
          {/* Maps each comment to a display element */}
          {selectedVideoInfo.comments.map((comment) => (
            <div key={comment.id} className="existing__ids">
              {/* Divider line between comments */}
              <div className="existing__divide"></div>
              {/* Container for individual comment details */}
              <div className="existing_innerctn">
                {/* Placeholder for commenter's avatar (currently not showing an image) */}
                <div className="existing__avatar-two"></div>
                {/* Container for comment's author and text */}
                <div className="existing__details">
                  {/* Comment author and date */}
                  <div className="existing__dateName">
                    <h3 className="existing__details-name">{comment.name}</h3>
                    <p className="existing__details-date">
                      {dateAndTimeOfComment(comment.timestamp)}
                    </p>
                  </div>
                  {/* The comment text */}
                  <p className="existing__details-text">{comment.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

// Export the Comment component for use in other parts of the application
export default Comment;
