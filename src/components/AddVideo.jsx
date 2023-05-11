import { useState } from "react";
import "./AddVideo.css";

let initialState = {
  channel: "Coder's Gyan",
  time: "1 Day ago",
  isVerified: true,
};
function AddVideo() {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(video);
  }

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
    console.log(video);
  }
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
        />
        <button
          onClick={() => {
            handleSubmit;
          }}
        >
          Add Video
        </button>
      </form>
    </>
  );
}

export default AddVideo;
