import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoData from "./data/data";

function App() {
  console.log("Render App");
  return (
    <>
      <div
        className="App"
        onClick={() => console.log("App bro! stop bubbling")}
      >
        {videoData.map((video) => {
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
