// Comment.jsx
import "./Comment.scss";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import commentButtonICon from "../../assets/Icons/add_comment.svg";
import axios from "axios";
import { useState } from "react";
import dateAndTimeOfComment from "../../Utils/Utils";

const { REACT_APP_BACKEND_URL } = process.env;
// The Comment component receives selectedVideoInfo and setSelectedVideoInfo props for managing video comments
const Comment = ({ selectedVideoInfo, setSelectedVideoInfo }) => {
  // State for handling new comment input fields
  const [newComment, setNewComment] = useState({
    comment: "",
    name: "",
  });

  // Handles changes in the comment form's input fields and updates the state
  const handleSelectFormInput = (event) => {
    setNewComment({ ...newComment, [event.target.name]: event.target.value });
  };


  const handleSummitComment = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const videoId = selectedVideoInfo.id; // Retrieves the current video ID
    const postCommentUrl = `${REACT_APP_BACKEND_URL}/${videoId}/comments`;

    try {
      // Submits the new comment to the backend
      await axios.post(postCommentUrl, {
        name: newComment.name,
        comment: newComment.comment,
      });

      // Clears the form fields after successful submission
      setNewComment({ name: "", comment: "" });

      // Fetches the updated list of comments from the backend
      const getComment = async () => {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/${videoId}`);
        setSelectedVideoInfo(response.data); // Updates the local state with the new comment data
      };
      getComment();
    } catch (error) {
      console.error("Failed to post this comment:", error);
    }
  };

  // Function to delete a comment
  const deleteComment = async (videoId, commentId) => {
    const deleteCommentUrl = `${REACT_APP_BACKEND_URL}/${videoId}/comments/${commentId}`;

    try {
      await axios.delete(deleteCommentUrl); // Sends a request to delete the comment

      // Filters out the deleted comment from the current list and updates the state
      const updateComments = selectedVideoInfo.comments.filter(
        (comment) => comment.id !== commentId
      );
      setSelectedVideoInfo({ ...selectedVideoInfo, comments: updateComments });
    } catch (error) {
      console.log("Failed to delete comment:", error);
    }
  };

  // Renders the comment section of the component
  return (
    <>
      <section className="comment">
        <h3 className="comment__title">
          {selectedVideoInfo.comments?.length} Comments
        </h3>
        <div className="comment__container">
          <img className="comment__avatar" src={avatarImage} alt="Avatar" />
          <form
            onSubmit={handleSummitComment}
            className="comment__form"
            id="comment__form"
          >
            <div className="comment__container-form">
              <label htmlFor="newComment" className="comment__label-form">
                JOIN THE CONVERSATION
              </label>
              <div className="comment__textAreaAndButton">
                <input
                  type="text"
                  onChange={handleSelectFormInput}
                  value={newComment.name}
                  className="comment__input"
                  placeholder="Your name"
                  required
                  id="name"
                  name="name"
                />
                <textarea
                  onChange={handleSelectFormInput}
                  value={newComment.comment}
                  className="comment__textarea-form"
                  placeholder="Add a new comment"
                  required
                  id="comment"
                  name="comment"
                ></textarea>
                <div className="comment__buttonIconStyle">
                  <button className="comment__upload">COMMENT</button>
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

        {/* Renders a list of existing comments, each with a delete button */}
        <div className="existing">
          {selectedVideoInfo.comments
            ?.sort((a, b) => b.timestamp - a.timestamp)
            .map((comment) => (
              <div key={comment.id} className="existing__ids">
                <div className="existing__divide"></div>
                <div className="existing__innerctn">
                  <div className="existing__avatar-two"></div>
                  <div className="existing__details">
                    <div className="existing__dateName">
                      <h3 className="existing__details-name">{comment.name}</h3>
                      <p className="existing__details-date">
                        {dateAndTimeOfComment(comment.timestamp)}
                      </p>
                    </div>
                    <p className="existing__details-text">{comment.comment}</p>
                    <button
                      onClick={() =>
                        deleteComment(selectedVideoInfo.id, comment.id)
                      }
                      className="existing__buttonOne"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Comment;
