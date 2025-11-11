import React from 'react';
import "../styles/navbar.css"
const Video = () => {
  return (
    <div className="video">
        <video preload="auto" autoPlay loop muted>
      <source
        src="https://plumbingbazzar.com/uploads/media/2025/WhatsApp_Video_2025-02-28_at_12_42_30_PM.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    </div>
  );
};

export default Video;
