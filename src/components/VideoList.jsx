import PlayButton from "./PlayButton";
import Video from "./Video";

function VideoList({ videos, deleteVideo, editVideo }) {
  return (
    <>
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
              deleteVideo={deleteVideo}
              editVideo={editVideo}
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
    </>
  );
}

export default VideoList;
