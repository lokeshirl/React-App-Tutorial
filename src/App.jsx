import { useState } from "react";
import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoData from "./data/data";
import AddVideo from "./components/AddVideo";

function App() {
  console.log("Render App");

  const [videos, setVideos] = useState(videoData);

  return (
    <>
      <div
        className="App"
        onClick={() => console.log("App bro! stop bubbling")}
      >
        <AddVideo />
        {videos.map((video) => {
          return (
            <>
              {/* Video Components starts here */}
              <Video
                key={video._id}
                _id={video._id}
                title={video.title}
                views={video.views}
                time={video.time}
                channel={video.channel}
                isVerified={video.isVerified}
              >
                <PlayButton
                  onPlay={() => console.log("Playing..", video.title)}
                  onPause={() => console.log("Paused..", video.title)}
                >
                  {video.title}
                </PlayButton>
              </Video>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;

// just a minute -- remove after completing this lecture
// #reference

/* 

<div>
  <button
    onClick={() => {
      setVideos([
        ...videos,
        {
          _id: videos.length + 1,
          title: "Demo Tutorials",
          channel: "Coder's Gyan",
          views: "10K",
          time: "1 Day ago",
          isVerified: true,
        },
      ]);
    }}
  >
    Add Video
  </button>
</div>

*/
