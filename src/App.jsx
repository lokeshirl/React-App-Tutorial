import "./App.css";
import Video from "./components/Video";

function App() {
  let videoData = {
    _id: 1,
    title: "React JS Tutorials",
    views: "999K",
    time: "1 year ago",
    channel: "Coder Dost",
  };
  return (
    <>
      <div className="App">
        <Video {...videoData} />
        <Video
          _id="2"
          title="Node JS Tutorials"
          channel="Code with Harry"
          views="100K"
          time="1 Week ago"
        />
      </div>
    </>
  );
}

export default App;
