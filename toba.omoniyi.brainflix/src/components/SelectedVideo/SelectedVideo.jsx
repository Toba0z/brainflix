import "./SelectedVideo.scss";

const SelectedVideo = ({ selectedVideoInfo }) => {
  return (
    <main className="hero">
      {/* The video element displays the selected video. 
          It uses the poster attribute to show a thumbnail before the video plays.
          The controls attribute adds video controls like play, pause, and volume. */}
      <video
        className="hero__video" // Assigns a class for specific styling
        poster={selectedVideoInfo.image} // Uses the image URL from selectedVideoInfo as the poster
        controls // Shows the browser's default video controls
      ></video>
    </main>
  );
};

// Export the SelectedVideo component for use in other parts of the application
export default SelectedVideo;
