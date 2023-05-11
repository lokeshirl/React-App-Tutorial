import { useState } from "react";
import "./App.css";
import videoData from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  console.log("Render App");

  const [videos, setVideos] = useState(videoData);

  function addVideos(video) {
    setVideos([...videos, { ...video, _id: videos.length + 1 }]);
  }

  return (
    <>
      <div className="App" onClick={() => console.log("App")}>
        <AddVideo addVideos={addVideos}></AddVideo>
        <VideoList videos={videos}></VideoList>
      </div>
    </>
  );
}

export default App;