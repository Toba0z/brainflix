// Comment.jsx
import "./Comment.scss";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import commentButtonICon from "../../assets/Icons/add_comment.svg";
import axios from "axios";
import { useState } from "react";
import dateAndTimeOfComment from "../../Utils/Utils";

const Comment = ({ selectedVideoInfo, setSelectedVideoInfo }) => {
  const [newComment, setNewComment] = useState({
    comment: "",
    name: "",
  });

  const handleSelectFormInput = (event) => {
    setNewComment({ ...newComment, [event.target.name]: event.target.value });
  };
  const brainFlixApiKey = "2515aa87-f829-40de-ade0-d0166853f149";
  const handleSummitComment = async (event) => {
    event.preventDefault();
    const videoId = selectedVideoInfo.id;
    const postCommentUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}/comments?api_key=${brainFlixApiKey}`;
    try {
      await axios.post(postCommentUrl, {
        name: newComment.name,
        comment: newComment.comment,
      });
      setNewComment({ name: "", comment: "" });

      const getComment = async () => {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${brainFlixApiKey}`
        );
        setSelectedVideoInfo(response.data);
      };
      getComment();
    } catch (error) {
      console.error("Failed to post this comment:", error);
    }
  };

const deleteComment = async(videoId, commentId)=>{
      // const videoId = selectedVideoInfo;
      const deleteCommentUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}/comments/${commentId}?api_key=${brainFlixApiKey}`;
      try {
        await axios.delete(deleteCommentUrl)
        const updateComments = selectedVideoInfo.comments.filter(comment => comment.id !== commentId);
        setSelectedVideoInfo({...selectedVideoInfo, comments:updateComments});
      } catch (error) {
        console.log("Failed to delete comment:", error);
      }
}

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

        <div className="existing__comments">
          {selectedVideoInfo.comments
            ?.sort((a, b) => b.timestamp - a.timestamp)
            .map((comment) => (
              <div key={comment.id} className="existing__ids">
                <div className="existing__divide"></div>
                <div className="existing_innerctn">
                  <div className="existing__avatar-two"></div>
                  <div className="existing__details">
                    <div className="existing__dateName">
                      <h3 className="existing__details-name">{comment.name}</h3>
                      <p className="existing__details-date">
                        {dateAndTimeOfComment(comment.timestamp)}{" "}
                      </p>
                    </div>
                    <p className="existing__details-text">{comment.comment}</p>
                    <button onClick={()=> deleteComment(selectedVideoInfo.id, comment.id)}className="existing__buttonOne">
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
};

export default Comment;
