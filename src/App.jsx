import { useState } from "react";
import "./App.css";
import videoData from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  console.log("Render App");

  const [videos, setVideos] = useState(videoData);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, _id: videos.length + 1 }]);
  }

  function deleteVideo(_id) {
    setVideos(videos.filter((video) => video._id !== _id));
  }

  function editVideo(_id) {
    setEditableVideo(videos.find((video) => video._id === _id));
  }

  function updateVideo(video) {
    const index = videos.findIndex((data) => data._id === video._id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  }

  return (
    <>
      <div className="App" onClick={() => console.log("App")}>
        <AddVideo
          addVideos={addVideos}
          editableVideo={editableVideo}
          updateVideo={updateVideo}
        ></AddVideo>
        <VideoList
          deleteVideo={deleteVideo}
          videos={videos}
          editVideo={editVideo}
        ></VideoList>
      </div>
    </>
  );
}

export default App;
