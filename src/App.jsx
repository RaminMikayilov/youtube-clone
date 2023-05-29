// pages
import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";

// components
import Navbar from "./components/Navbar";

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
            <Route exact path="/" element={<Home />} />
            <Route path="/video/:videoId" element={<VideoDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </YoutubeContextProvider>
  );
}

export default App;
