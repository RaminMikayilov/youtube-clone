// components
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import VideoDetails from "./components/VideoDetails";

// context provider
import { YoutubeContextProvider } from "./contexts/YoutubeContext";

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <YoutubeContextProvider>
      <div className="bg-cBlack">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route path="/video/:videoId" element={<VideoDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </YoutubeContextProvider>
  );
}

export default App;
