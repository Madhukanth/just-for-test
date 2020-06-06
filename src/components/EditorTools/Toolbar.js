import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { icons, colors } from "../themes/base";

import ToolIcon from "../common/ToolIcon";

const StyledToolbar = styled.div`
  height: 870px;
  width: 60px;
  opacity: 0.9;
  background-color: ${colors.brand};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  height: 1px;
  width: 60px;
  opacity: 0.15;
  background-color: ${colors.white};
`;

function Toolbar(props) {
  function getSrc(tool) {
    const selected = props.selected === tool;
    let src;

    switch (tool) {
      case "video": {
        src = selected ? icons.IC_Video_Blue : icons.IC_Video;
        break;
      }
      case "correction": {
        src = selected
          ? icons.IC_Color_Correction_Blue
          : icons.IC_Color_Correction;
        break;
      }
      case "contrast": {
        src = selected ? icons.IC_Contrast_Blue : icons.IC_Contrast;
        break;
      }
      case "effect": {
        src = selected ? icons.IC_Effects_Blue : icons.IC_Effects;
        break;
      }
      case "text": {
        src = selected ? icons.IC_Text_Blue : icons.IC_Text;
        break;
      }
      case "draw": {
        src = selected ? icons.IC_Draw_Blue : icons.IC_Draw;
        break;
      }
      case "shape": {
        src = selected ? icons.IC_Shape_Blue : icons.IC_Shape;
        break;
      }
      case "speed": {
        src = selected ? icons.IC_Speed_Blue : icons.IC_Speed;
        break;
      }
      default: {
        src = selected ? icons.IC_Video_Blue : icons.IC_Video;
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
