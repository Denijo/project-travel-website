import { useState } from "react";
const Header = ({ heading, paragraph, children }) => {
  const [state] = useState({
    video: "/assets/video/header.mp4",
    poster: "/assets/images/screen.png",
  });
  return (
    <div className="header">
      <div className="header__video">
        <video
          src={state.video}
          autoPlay
          loop
          muted
          poster={state.poster}
        ></video>
      </div>
      <div className="header__contents">
        <div className="container">
          <div className="contentText">
            <div className="contentTextChild">
              <h1 className="contentTitle">{heading}</h1>
              <p className="contentSubtitle">{paragraph}</p>
              <div className="contentLink">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
