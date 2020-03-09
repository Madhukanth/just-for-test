import React from "react";

// https://redactionapicomme.blob.core.windows.net/737debf9e331/737debf9e331.mp4

function Video() {
  return (
    <video
      height="500"
      width="700"
      controls
      preload="metadata"
      onTimeUpdate={e => console.log(e.target.currentTime)}
    >
      <source
        src="https://suspecttechtesting.blob.core.windows.net/5d09e29cde53400b86279ce0/input/abc123.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default Video;
