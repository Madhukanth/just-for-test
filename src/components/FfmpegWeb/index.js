import React, { useEffect } from "react";
import { createWorker } from "@ffmpeg/ffmpeg";
import srcVideo from "./mission.mp4";

const worker = createWorker();

async function initLoad() {
  await worker.load();
  await worker.transcode(srcVideo, "test.avi");
}

function FfmpegWeb(props) {
  useEffect(() => {
    initLoad();
  }, []);

  return (
    <video
      src={srcVideo}
      style={{ height: "400px", width: "600px" }}
      controls
    />
  );
}

export default FfmpegWeb;
