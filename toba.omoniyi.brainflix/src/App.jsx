// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Uploads from "./pages/Uploads/Uploads";

const App = (setSelectedVideoInfo, selectedVideoInfo, videosInfo) => {
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
