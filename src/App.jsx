import "./App.css";
import Video from "./components/Video";
import videoData from "./data/data";

function App() {
  return (
    <>
      <div className="App">
        {videoData.map((video) => {
          return (
            <Video
              key={video._id}
              _id={video._id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              isVerified={video.isVerified}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
