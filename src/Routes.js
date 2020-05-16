import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Timeline from "./components/Timeline";
import Video from "./components/Video";
import ResizeBox from "./components/ResizeBox";
import Layer from "./components/RcSlider/Layer";
import FfmpegWeb from "./components/FfmpegWeb";
import ProjectProperty from "./components/EditorTools/ProjectProperty";
import AdjustProperty from "./components/EditorTools/AdjustProperty";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Timeline} exact />
      <Route path="/video" component={Video} exact />
      <Route path="/resize" component={ResizeBox} exact />
      <Route path="/slider" component={Layer} exact />
      <Route path="/ffmpeg" component={FfmpegWeb} exact />
      <Route path="/tools/project" component={ProjectProperty} exact />
      <Route path="/tools/adjust" component={AdjustProperty} exact />
    </Switch>
  </BrowserRouter>
);
export default Routes;
