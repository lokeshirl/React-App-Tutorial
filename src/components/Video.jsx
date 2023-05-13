import "./Video.css";

function Video({
  title,
  views,
  time,
  channel,
  _id,
  isVerified,
  children,
  deleteVideo,
  editVideo,
}) {
  console.log("Render Video");
  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideo(_id)}>
          X
        </button>
        <button className="edit" onClick={() => editVideo(_id)}>
          edit
        </button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${_id}/160/90`} />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {isVerified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
