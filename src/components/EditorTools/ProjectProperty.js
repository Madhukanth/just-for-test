import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import EditorTools from "./EditorTools";
import AnchorText from "../common/AnchorText";
import SubProperty from "../common/SubProperty";
import ToolbarInput from "../common/ToolbarInput";
import ToolbarRange from "../common/ToolbarRange";
import ToolsHeaderText from "../common/ToolsHeaderText";
import ToolbarColorPicker from "../common/ToolbarColorPicker";
import ToolbarPropDivider from "../common/ToolbarPropDivider";

const StyledWrapper = styled.div`
  padding: 0 10px;

  .__react_component_tooltip {
    position: absolute;
    top: 43px !important;
    left: 57px !important;
    width: 235px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 2px 6px 0px rgba(0, 61, 162, 0.2);
    padding: 10px;
    text-transform: capitalize;
    opacity: 1;

    ::after {
      content: "";
      left: 87% !important;
      border-left: 15px solid white;
      border-right: 11px solid white;
      top: -12px;
      margin-left: -8px;
      border-bottom-color: #ffffff;
      border-bottom-style: solid;
      border-bottom-width: 25px;
      box-shadow: 1.3px 1.3px 3px -1px rgba(0, 61, 162, 0.1);
      border-radius: 3px;
      transform: rotate(-136deg);
    }
  }

  .light-text {
    opacity: 0.5;
    color: #142945;
    font-family: Muli;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: capitalize;
  }

  .color-selected {
    height: 34px;
    width: 34px;
    border-radius: 2px;
    background-color: #4cd965;
    cursor: pointer;
  }

  .text-container {
    height: 37px;
    display: flex;
    font-size: 13px;
    color: #142945;
    font-family: Muli;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: capitalize;
    justify-content: space-between;
  }
`;

function ProjectProperty(props) {
  return (
    <EditorTools>
      <StyledWrapper>
        <ToolsHeaderText>Project</ToolsHeaderText>
        <SubProperty>
          <p className="light-text">Background Color</p>
          <div
            data-for="video-tooltip"
            data-tip="color picker"
            data-event="click"
            className="color-selected"
          ></div>
          <ToolbarColorPicker
            tooltipID="video-tooltip"
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
          <div className="text-container">
            <p>Volume</p>
            <p>{props.volume}%</p>
          </div>
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

export default ProjectProperty;

ProjectProperty.propTypes = {
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

ProjectProperty.defaultProps = {
  selectedColor: "#4cd965",
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
