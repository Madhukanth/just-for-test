import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ToolIcon from "../common/ToolIcon";
import IC_Video from "./icons/ic_video.png";
import IC_Video_Blue from "./icons/ic_video-blue.png";
import IC_Color_Correction from "./icons/ic_color_correction.png";
import IC_Color_Correction_Blue from "./icons/ic_color_correction-blue.png";
import IC_Contrast from "./icons/ic_contrast.png";
import IC_Contrast_Blue from "./icons/ic_contrast-blue.png";
import IC_Effects from "./icons/ic_effects.png";
import IC_Effects_Blue from "./icons/ic_effects-blue.png";
import IC_Text from "./icons/ic_text.png";
import IC_Text_Blue from "./icons/ic_text-blue.png";
import IC_Draw from "./icons/ic_draw.png";
import IC_Draw_Blue from "./icons/ic_draw-blue.png";
import IC_Shape from "./icons/ic_shape.png";
import IC_Shape_Blue from "./icons/ic_shape-blue.png";
import IC_Speed from "./icons/ic_speed.png";
import IC_Speed_Blue from "./icons/ic_speed-blue.png";

const StyledToolbar = styled.div`
  height: 870px;
  width: 60px;
  opacity: 0.9;
  background-color: #003da2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  height: 1px;
  width: 60px;
  opacity: 0.15;
  background-color: #ffffff;
`;

function Toolbar(props) {
  function getSrc(tool) {
    const selected = props.selected === tool;
    let src;

    switch (tool) {
      case "video": {
        src = selected ? IC_Video_Blue : IC_Video;
        break;
      }
      case "correction": {
        src = selected ? IC_Color_Correction_Blue : IC_Color_Correction;
        break;
      }
      case "contrast": {
        src = selected ? IC_Contrast_Blue : IC_Contrast;
        break;
      }
      case "effect": {
        src = selected ? IC_Effects_Blue : IC_Effects;
        break;
      }
      case "text": {
        src = selected ? IC_Text_Blue : IC_Text;
        break;
      }
      case "draw": {
        src = selected ? IC_Draw_Blue : IC_Draw;
        break;
      }
      case "shape": {
        src = selected ? IC_Shape_Blue : IC_Shape;
        break;
      }
      case "speed": {
        src = selected ? IC_Speed_Blue : IC_Speed;
        break;
      }
      default: {
        src = selected ? IC_Video_Blue : IC_Video;
        break;
      }
    }

    return src;
  }

  return (
    <StyledToolbar>
      <ToolIcon
        style={{ margin: "13px 0" }}
        selected={props.selected === "video"}
        src={getSrc("video")}
      />
      <Divider />
      <ToolIcon
        selected={props.selected === "correction"}
        src={getSrc("correction")}
      />
      <ToolIcon
        selected={props.selected === "contrast"}
        src={getSrc("contrast")}
      />
      <ToolIcon selected={props.selected === "effect"} src={getSrc("effect")} />
      <ToolIcon selected={props.selected === "text"} src={getSrc("text")} />
      <ToolIcon selected={props.selected === "draw"} src={getSrc("draw")} />
      <ToolIcon selected={props.selected === "shape"} src={getSrc("shape")} />
      <ToolIcon selected={props.selected === "speed"} src={getSrc("speed")} />
    </StyledToolbar>
  );
}

Toolbar.propTypes = {
  selected: PropTypes.string,
};

Toolbar.defaultProps = {
  selected: "video",
};

export default Toolbar;
