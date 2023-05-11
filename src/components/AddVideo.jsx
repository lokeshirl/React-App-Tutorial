import { useState } from "react";
import "./AddVideo.css";

let initialState = {
  channel: "Coder's Gyan",
  time: "1 Day ago",
  isVerified: true,
  title: "",
  views: "",
};
function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState);
  }

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <button onClick={handleSubmit}>Add Video</button>
      </form>
    </>
  );
}

export default AddVideo;
