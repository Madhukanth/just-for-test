import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Timeline from "./components/Timeline";
import Video from "./components/Video";
import ResizeBox from "./components/ResizeBox";
import Layer from "./components/RcSlider/Layer";
import FfmpegWeb from "./components/FfmpegWeb";
import EditorTools from "./components/EditorTools";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Timeline} exact />
      <Route path="/video" component={Video} exact />
      <Route path="/resize" component={ResizeBox} exact />
      <Route path="/slider" component={Layer} exact />
      <Route path="/ffmpeg" component={FfmpegWeb} exact />
      <Route path="/tools" component={EditorTools} exact />
    </Switch>
  </BrowserRouter>
);
export default Routes;
