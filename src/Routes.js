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
import ShapeProperty from "./components/EditorTools/ShapeProperty";
import ColorCorrectionProperty from "./components/EditorTools/ColorCorrectionProperty";
import EffectsProperty from "./components/EditorTools/EffectsProperty";
import Demograph from "./components/Demograph";
import Wheelzoom from "./components/Wheelzoom";
import FlexTest from "./components/Flex";
import PhoneCamera from "./components/phonecamera";
import Graph from "./components/Graph";
import Resume from "./components/Resume";

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
      <Route path="/tools/shape" component={ShapeProperty} exact />
      <Route
        path="/tools/ccorrection"
        component={ColorCorrectionProperty}
        exact
      />
      <Route path="/tools/effects" component={EffectsProperty} exact />
      <Route path="/wheelzoom" component={Wheelzoom} exact />

      <Route path="/demo" exact component={Demograph} />

      <Route path="/flex" exact component={FlexTest} />

      <Route path="/phone" exact component={PhoneCamera} />

      <Route path="/graph" exact component={Graph} />

      <Route path="/resume" exact component={Resume} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
