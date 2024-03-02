// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Uploads from "./pages/Uploads/Uploads";
import axios from "axios";


const App = () => {
  const [selectedVideoInfo, setSelectedVideoInfo] = useState({});
  const [videosInfo, setVideosInfo] = useState([]);
  const brainFlixApiKey = "2515aa87-f829-40de-ade0-d0166853f149";
  useEffect(() => {
    const fetchVideosAll = async () => {
      const videosUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${brainFlixApiKey}`;
      try {
        const { data } = await axios.get(videosUrl);
        setVideosInfo(data);
      } catch (error) {
        console.error("Could not fetch videos!", error);
      }
    };
    fetchVideosAll();
  }, []);


  const dateAndTimeOfComment = (date) => {
    const now = new Date();
    const CommentDate = new Date(date);
    const differenceInSeconds = Math.round((now - CommentDate) / 1000);
    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
      return `${Math.round(differenceInSeconds / 60)} minutes ago`;
    } else if (differenceInSeconds < 86400) {
      return `${Math.round(differenceInSeconds / 3600)} hours ago`;
    } else if (differenceInSeconds < 2592000) {
      return `${Math.round(differenceInSeconds / 86400)} days ago`;
    } else if (differenceInSeconds < 31104000) {
      return `${Math.round(differenceInSeconds / 2592000)} months ago`;
    } else {
      return `${Math.round(differenceInSeconds / 31104000)} years ago`;
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                selectedVideoInfo={selectedVideoInfo}
                setSelectedVideoInfo={setSelectedVideoInfo}
                videosInfo={videosInfo}
                dateAndTimeOfComment={dateAndTimeOfComment}
              />
            }
          ></Route>
          <Route
            path="/:videoId"
            element={
              <HomePage
                selectedVideoInfo={selectedVideoInfo}
                setSelectedVideoInfo={setSelectedVideoInfo}
                videosInfo={videosInfo}
                dateAndTimeOfComment={dateAndTimeOfComment}
              />
            }
          ></Route>
          <Route path="/uploads" element={<Uploads />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
