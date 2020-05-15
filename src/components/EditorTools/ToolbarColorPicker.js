import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import ToolbarRange from "./ToolbarRange";

const colors = [
  "#000000",
  "#FFFFFF",
  "#A766FA",
  "#5269DA",
  "#147DE8",
  "#24CFCF",
  "#EAF1FA",
  "#4cd965",
  "#FECC2F",
  "#FD9028",
  "#FF026B",
  "#D8D8D8",
  "#243F43",
  "#EA7A76",
  "#369BA5",
  "#F65D95",
  "#FF1716",
  "#62BCF9",
  "#FDE371",
  "#7FE7C2",
  "#F088E6",
  "#FF4149",
  "#1502F8",
  "#FFFD54",
];

const StyledColorPicker = styled.div`
  .color-navigation {
    display: flex;

    .blue-text {
      color: #00c1ff !important;
    }

    p {
      color: #142945;
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
      color: #142945;
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
    border: 1px solid rgba(20, 41, 69, 0.1);
    border-radius: 2px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px 0 5px;
    color: #142945;
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
        color: #142945;
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
    <ReactTooltip
      clickable
      type="light"
      effect="solid"
      place="bottom"
      id="custom-event"
      data-event-off="click"
    >
      <StyledColorPicker selectedColor={props.selectedColor}>
        <div className="color-navigation">
          <p className="blue-text">Color Picker (All)</p>
          <p>Palettes Size</p>
        </div>
        <div className="color-options">
          {colors.map((color) => {
            let border = "none";
            let height = "34px";
            let width = "34px";

            if (
              color === "#FFFFFF" ||
              color === "#ffffff" ||
              color === "white"
            ) {
              border = "1px solid #979797";
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
  );
}

export default ToolbarColorPicker;
