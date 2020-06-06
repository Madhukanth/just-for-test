import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import { colors } from "../themes/base";
import ToolbarRange from "./ToolbarRange";

const StyledWrapper = styled.div`
  .__react_component_tooltip {
    position: absolute;
    top: 43px !important;
    left: 57px !important;
    width: 235px;
    border-radius: 5px;
    background-color: ${colors.white};
    box-shadow: 0 2px 6px 0px ${colors.palette_tools.s_light};
    padding: 10px;
    text-transform: capitalize;
    opacity: 1;

    ::after {
      content: "";
      left: 87% !important;
      border-left: 15px solid ${colors.white} !important;
      border-right: 11px solid ${colors.white} !important;
      top: -12px !important;
      margin-left: -8px !important;
      border-bottom-color: ${colors.white};
      border-bottom-style: solid;
      border-bottom-width: 25px !important;
      box-shadow: 1.3px 1.3px 3px -1px ${colors.palette_tools.s_verylight};
      border-radius: 3px;
      transform: rotate(-136deg) !important;
    }
  }
`;

const ColorSelector = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 2px;
  background-color: ${(props) => props.selectedColor};
  cursor: pointer;
`;

const StyledColorPicker = styled.div`
  .color-navigation {
    display: flex;

    .blue-text {
      color: ${colors.palette_tools.font} !important;
    }

    p {
      color: ${colors.secondary};
      font-family: Muli;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 15px;
      margin-right: 30px;
    }
  }

  .color-options {
    display: flex;
    flex-wrap: wrap;
  }

  .opacity {
    display: flex;
    flex-direction: column;

    .opacity-text {
      line-height: 0px;
      display: flex;
      color: ${colors.secondary};
      font-family: Muli;
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 0;
      justify-content: space-between;

      .value {
        font-weight: 700;
      }
    }
  }

  .color-hex {
    box-sizing: border-box;
    height: 34px;
    width: 230px;
    border: 1px solid ${colors.s_extralight};
    border-radius: 2px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px 0 5px;
    color: ${colors.secondary};
    font-family: Muli;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 15px;

    .light-text {
      opacity: 0.5;
    }

    .selected {
      display: flex;
      align-items: center;

      input {
        border: 0;
        height: 20px;
        max-width: 100px;
        color: ${colors.secondary};
        font-family: Muli;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 15px;

        :focus {
          outline: 0;
        }
      }

      .selected-color {
        height: 24px;
        width: 24px;
        margin-right: 4px;
        border-radius: 2px;
        background-color: ${(props) => props.selectedColor};
      }
    }
  }
`;

const Color = styled.button`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 2px;
  margin: 7px 13px 7px 0px;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  cursor: pointer;
  box-shadow: ${(props) =>
    props.selected ? `${props.background} 0 0 5px` : "none"};

  :hover {
    box-shadow: ${(props) => `${props.background} 0 0 5px`};
  }

  :focus {
    outline: 0;
  }
`;

function ToolbarColorPicker(props) {
  return (
    <StyledWrapper>
      <ColorSelector
        data-for={props.tooltipID}
        data-tip="color picker"
        data-event="click"
        selectedColor={props.selectedColor}
      />
      <ReactTooltip
        clickable
        type="light"
        effect="solid"
        place="bottom"
        id={props.tooltipID}
        data-event-off="click"
        className="color-tooltip"
      >
        <StyledColorPicker selectedColor={props.selectedColor}>
          <div className="color-navigation">
            <p className="blue-text">Color Picker (All)</p>
            <p>Palettes Size</p>
          </div>
          <div className="color-options">
            {colors.palette.map((color) => {
              let border = "none";
              let height = "34px";
              let width = "34px";

              if (color === colors.white) {
                border = `1px solid ${colors.palette_tools.border}`;
                height = "33px";
                width = "33px";
              }

              return (
                <Color
                  key={color}
                  width={width}
                  border={border}
                  height={height}
                  background={color}
                  onClick={props.setColor}
                  selected={props.selectedColor === color}
                ></Color>
              );
            })}
          </div>
          <div className="opacity">
            <div className="opacity-text">
              <p>Opacity</p>
              <p className="value">{props.opacity}%</p>
            </div>
            <ToolbarRange
              value={props.opacity}
              onChange={props.setOpacity}
              height="8px"
              width="230px"
            />
          </div>
          <div className="color-hex">
            <div className="selected">
              <div className="selected-color"></div>
              <input value={props.selectedColor} onChange={props.setColor} />
            </div>
            <p className="light-text">Hex</p>
          </div>
        </StyledColorPicker>
      </ReactTooltip>
    </StyledWrapper>
  );
}

export default ToolbarColorPicker;

ToolbarColorPicker.propTypes = {
  selectedColor: PropTypes.string,
  setColor: PropTypes.func,
  opacity: PropTypes.number,
  setOpacity: PropTypes.func,
  tooltipID: PropTypes.string,
};

ToolbarColorPicker.defaultProps = {
  tooltipID: "video-tooltip",
  selectedColor: colors.palette[7],
  setColor: () => {},
  opacity: 60,
  setOpacity: () => {},
};
