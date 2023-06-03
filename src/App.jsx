// pages
import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";
import ChannelDetails from "./pages/ChannelDetails";
import Search from "./pages/Search";

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
            <Route path="/channel/:channelId" element={<ChannelDetails />} />
            <Route path="/search/:searchQuery" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </YoutubeContextProvider>
  );
}

export default App;
