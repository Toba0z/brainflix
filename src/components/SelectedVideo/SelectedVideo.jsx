import "./SelectedVideo.scss";
const SelectedVideo = ({ selectedVideoInfo}) => {
  return (
    <main className="hero">
      <video
        className="hero__video"
        poster={selectedVideoInfo.image}
        controls
      ></video>
    </main>
  );
};

export default SelectedVideo;
