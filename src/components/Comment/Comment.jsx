// Comment.jsx
import React from "react";
import "./Comment.scss";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";

const Comment = ({ selectedVideoInfo, dateAndTimeOfComment}) => {
  return (
    <section className="comment">
      <h3 className="comment__title">
        {selectedVideoInfo.comments.length} Comments
      </h3>
      <div className="comment__container">
        <img className="comment__avatar" src={avatarImage} alt="Avatar" />
        <form className="comment__form" id="comment__form">
          <div className="comment__container-form">
            <label htmlFor="newComment" className="comment__label-form">
              JOIN THE CONVERSATION
            </label>
            <div className="comment__textAreaAndButton">
            <textarea
              className="comment__textarea-form"
              placeholder="Add a new comment"
              required
              id="newComment"
              name="newComment"
            ></textarea>
            <button type="submit" className="comment__button-form">
              COMMENT
            </button>
            </div>
          </div>
        </form>
      </div>

      <div className="existing__comments">
        {selectedVideoInfo.comments.map((comment) => (
          <div key={comment.id} className="existing__ids">
            <div className="existing__divide"></div>
            <div className="existing_innerctn">
            <div className="existing__avatar-two"></div>
            <div className="existing__details">
              <div className="existing__dateName">
                <h3 className="existing__details-name">{comment.name}</h3>
                <p className="existing__details-date">
                  {dateAndTimeOfComment(comment.timestamp)}
                </p>
              </div>
              <p className="existing__details-text">{comment.comment}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comment;
