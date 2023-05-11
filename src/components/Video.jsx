import "./Video.css";

const Video = ({ title, views, time, channel, _id, isVerified }) => {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
};

export default Video;
