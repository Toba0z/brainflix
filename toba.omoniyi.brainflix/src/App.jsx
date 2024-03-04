// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Uploads from "./pages/Uploads/Uploads";
import axios from "axios";
// Defines the App functional component
const App = () => {
  // State for storing information about the currently selected video
  const [selectedVideoInfo, setSelectedVideoInfo] = useState({});
  // State for storing a list of all video information
  const [videosInfo, setVideosInfo] = useState([]);

  // API key for accessing video information
  const brainFlixApiKey = "2515aa87-f829-40de-ade0-d0166853f149";

  // useEffect hook to fetch all videos on component mount
  useEffect(() => {
    // Asynchronous function to fetch all video data from the backend
    const fetchVideosAll = async () => {
      const videosUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${brainFlixApiKey}`;
      try {
        // Using axios to perform the GET request
        const { data } = await axios.get(videosUrl);
        // Updating the videosInfo state with the fetched data
        setVideosInfo(data);
      } catch (error) {
        // Error handling if the fetch operation fails
        console.error("Could not fetch videos!", error);
      }
    };
    // Calling the fetch function
    fetchVideosAll();
  }, []); // Empty dependency array means this effect runs once on component mount

  // Returns JSX for the application's UI structure
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> {/* Renders the Header component */}
        <Routes>
          {/* Route for the homepage */}
          <Route
            path="/"
            element={
              <HomePage
                selectedVideoInfo={selectedVideoInfo}
                setSelectedVideoInfo={setSelectedVideoInfo}
                videosInfo={videosInfo}
              />
            }
          ></Route>
          {/* Route for a specific video by its ID */}
          <Route
            path="/:videoId"
            element={
              <HomePage
                selectedVideoInfo={selectedVideoInfo}
                setSelectedVideoInfo={setSelectedVideoInfo}
                videosInfo={videosInfo}
              />
            }
          ></Route>
          {/* Route for the upload page */}
          <Route path="/uploads" element={<Uploads />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
