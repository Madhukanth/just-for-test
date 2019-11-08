import Wavesurfer from "wavesurfer.js";

const audioWaves = () => {
  const interval = setTimeout(() => {
    const wavesurfer = Wavesurfer.create({
      container: "#waveform"
    });

    wavesurfer.load();
  }, 5000);
  return <div id="waveform" />;
};

export default audioWaves;
