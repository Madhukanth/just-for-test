import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../common/Button";
import ToolbarInput from "./ToolbarInput";
import ToolbarRange from "./ToolbarRange";
import ToolbarColorPicker from "./ToolbarColorPicker";

import ToolbarPropDivider from "./ToolbarPropDivider";

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    width: 330px;
    margin: 20px 0;
  }

  .video-properties {
    padding: 0 10px;

    .sub-property {
      display: flex;
      position: relative;
      justify-content: space-between;
      position: relative;
      margin: 15px 10px;

      .__react_component_tooltip {
        position: absolute;
        top: 43px !important;
        left: 59px !important;
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

      p {
        color: #142945;
        font-family: Muli;
        font-size: 12px;
        letter-spacing: 0;
        line-height: 15px;
        text-transform: capitalize;
      }

      .light-text {
        opacity: 0.5;
      }

      .text {
        font-size: 13px;
      }

      a {
        color: #00bfff;
        font-family: Muli;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 15px;
        text-align: center;
        margin: auto 0;
        text-decoration: underline;
        cursor: pointer;
      }

      .color-selected {
        height: 34px;
        width: 34px;
        border-radius: 2px;
        background-color: #4cd965;
      }

      .volume-text {
        display: flex;
        justify-content: space-between;
        height: 37px;
      }
    }

    .heading {
      opacity: 0.5;
      color: #142945;
      font-family: Muli;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0;
      line-height: 15px;
      text-transform: uppercase;
    }
  }
`;

function VideoProperties(props) {
  return (
    <StyledWrapper>
      <div className="button-container">
        <Button height="34px" borderRadius="19px" margin="7px">
          Editing Tool
        </Button>
        <Button
          height="34px"
          margin="7px"
          background="rgba(20, 41, 69,0.03)"
          color="#142945"
          borderRadius="19px"
        >
          Report
        </Button>
      </div>

      <div className="video-properties">
        <p className="heading">Project</p>
        <div className="sub-property">
          <p className="light-text">Background Color</p>
          <div
            data-for="custom-event"
            data-tip="custom show"
            data-event="click"
            className="color-selected"
          ></div>
          <ToolbarColorPicker
            selectedColor={props.selectedColor}
            setColor={props.setColor}
            opacity={props.opacity}
            setOpacity={props.setOpacity}
          />
        </div>
        <ToolbarPropDivider />
        <div className="sub-property">
          <p className="light-text">Video Fit</p>
          <ToolbarInput value={props.videoFit} onChange={props.setVideoFit} />
        </div>
        <ToolbarPropDivider />
        <div className="sub-property">
          <p className="light-text">Resolution</p>
          <ToolbarInput
            value={props.resolution}
            onChange={props.setResolution}
          />
        </div>
        <ToolbarPropDivider />
        <div className="sub-property">
          <p className="light-text">Duration</p>
          <ToolbarInput value={props.duration} onChange={props.setDuration} />
        </div>
        <ToolbarPropDivider />
        <div className="sub-property" style={{ flexDirection: "column" }}>
          <div className="volume-text">
            <p className="text">Volume</p>
            <p className="text">{props.volume}%</p>
          </div>
          <ToolbarRange value={props.volume} onChange={props.setVolume} />
        </div>

        <ToolbarPropDivider />

        <div className="sub-property">
          <p className="light-text">Video Path</p>
          <a href="http://google.com">Browse</a>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default VideoProperties;

VideoProperties.propTypes = {
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

VideoProperties.defaultProps = {
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
