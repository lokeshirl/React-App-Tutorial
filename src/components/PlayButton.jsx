import { useState } from "react";
import "./PlayButton.css";

function PlayButton({ children, onPlay, onPause }) {
  console.log("Render PlayButton");

  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    isPlaying ? onPause() : onPlay();

    setIsPlaying(!isPlaying);
  }
  return (
    <>
      <button onClick={handleClick}>
        {children} : {isPlaying ? "⏸️" : "▶️"}
      </button>
    </>
  );
}

export default PlayButton;
