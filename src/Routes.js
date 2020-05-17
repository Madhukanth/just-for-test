import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Timeline from "./components/Timeline";
import Video from "./components/Video";
import ResizeBox from "./components/ResizeBox";
import Layer from "./components/RcSlider/Layer";
import FfmpegWeb from "./components/FfmpegWeb";
import VideoProperty from "./components/EditorTools/VideoProperty";
import ContrastProperty from "./components/EditorTools/ContrastProperty";
import SpeedProperty from "./components/EditorTools/SpeedProperty";
import TextProperty from "./components/EditorTools/TextProperty";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Timeline} exact />
      <Route path="/video" component={Video} exact />
      <Route path="/resize" component={ResizeBox} exact />
      <Route path="/slider" component={Layer} exact />
      <Route path="/ffmpeg" component={FfmpegWeb} exact />
      <Route path="/tools/video" component={VideoProperty} exact />
      <Route path="/tools/contrast" component={ContrastProperty} exact />
      <Route path="/tools/speed" component={SpeedProperty} exact />
      <Route path="/tools/text" component={TextProperty} exact />
    </Switch>
  </BrowserRouter>
);
export default Routes;
