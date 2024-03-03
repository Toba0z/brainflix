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
