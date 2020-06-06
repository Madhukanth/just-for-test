import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "../themes/base";

import EditorTools from "./EditorTools";
import SliderText from "../common/SliderText";
import AnchorText from "../common/AnchorText";
import SubProperty from "../common/SubProperty";
import ToolbarInput from "../common/ToolbarInput";
import ToolbarRange from "../common/ToolbarRange";
import ToolsHeaderText from "../common/ToolsHeaderText";
import ToolbarColorPicker from "../common/ToolbarColorPicker";
import ToolbarPropDivider from "../common/ToolbarPropDivider";

const StyledWrapper = styled.div`
  padding: 0 10px;
  height: 680px;
  overflow: scroll;

  .light-text {
    opacity: 0.5;
    color: ${colors.secondary};
    font-family: Muli;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: capitalize;
  }

  .text-container {
    height: 37px;
    display: flex;
    font-size: 13px;
    color: ${colors.secondary};
    font-family: Muli;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: capitalize;
    justify-content: space-between;
  }
`;

function VideoProperty(props) {
  return (
    <EditorTools selected="video">
      <StyledWrapper>
        <ToolsHeaderText>Project</ToolsHeaderText>
        <SubProperty>
          <p className="light-text">Background Color</p>
          <ToolbarColorPicker
            tooltipID="video-colorpicker"
            selectedColor={props.selectedColor}
            setColor={props.setColor}
            opacity={props.opacity}
            setOpacity={props.setOpacity}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty>
          <p className="light-text">Video Fit</p>
          <ToolbarInput value={props.videoFit} onChange={props.setVideoFit} />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty>
          <p className="light-text">Resolution</p>
          <ToolbarInput
            value={props.resolution}
            onChange={props.setResolution}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty>
          <p className="light-text">Duration</p>
          <ToolbarInput value={props.duration} onChange={props.setDuration} />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty style={{ flexDirection: "column" }}>
          <SliderText>
            <p>Volume</p>
            <p>{props.volume}%</p>
          </SliderText>
          <ToolbarRange value={props.volume} onChange={props.setVolume} />
        </SubProperty>

        <ToolbarPropDivider />

        <SubProperty>
          <p className="light-text">Video Path</p>
          <AnchorText href="http://google.com">Browse</AnchorText>
        </SubProperty>
      </StyledWrapper>
    </EditorTools>
  );
}

export default VideoProperty;

VideoProperty.propTypes = {
  selectedColor: PropTypes.string,
  videoFit: PropTypes.string,
  resolution: PropTypes.string,
  duration: PropTypes.string,
  volume: PropTypes.number,
  opacity: PropTypes.number,
  setColor: PropTypes.func,
  setVideoFit: PropTypes.func,
  setResolution: PropTypes.func,
  setDuration: PropTypes.func,
  setVolume: PropTypes.func,
  setOpacity: PropTypes.func,
};

VideoProperty.defaultProps = {
  selectedColor: colors.palette[7],
  videoFit: "Fill Frame",
  resolution: "1280x720",
  duration: "04:33:0",
  volume: 30,
  opacity: 60,
  setColor: () => {},
  setVideoFit: () => {},
  setResolution: () => {},
  setDuration: () => {},
  setVolume: () => {},
  setOpacity: () => {},
};
