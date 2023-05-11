import "./Video.css";

const Video = () => {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/1/160/90`} />
        </div>
        <div className="title">React JS Tutorials</div>
        <div className="channel">Coder's Dost</div>
        <div className="views">
          999k views <span>.</span> 1year ago
        </div>
      </div>
    </>
  );
};

export default Video;
