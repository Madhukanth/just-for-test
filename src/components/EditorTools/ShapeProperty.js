import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { icons, colors } from "../themes/base";

import Button from "../common/Button";
import EditorTools from "./EditorTools";
import SubProperty from "../common/SubProperty";
import ToolbarInput from "../common/ToolbarInput";
import ToolsHeaderText from "../common/ToolsHeaderText";
import ToolbarTextInput from "../common/ToolbarTextInput";
import ToolbarColorPicker from "../common/ToolbarColorPicker";
import ToolbarPropDivider from "../common/ToolbarPropDivider";

const SquareShape = styled.div`
  width: 34px;
  height: 34px;
  border: 0;
  background-color: ${colors.shape_tools.blue1};
`;

const RoundedSquare = styled.div`
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 10px;
  background-color: ${colors.shape_tools.red};
`;

const CircleShape = styled.div`
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 37px;
  background-color: ${colors.shape_tools.blue2};
`;

const StyledWrapper = styled.div`
  padding: ${(props) => props.padding || "0 10px"};
  border-left: ${(props) => props.borderLeft};

  .shape-text {
    color: rgba(20, 41, 69, 0.5);
    font-family: Muli;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: capitalize;
  }

  .shape-input-container {
    display: flex;
    width: 134px;
    justify-content: space-between;
  }

  .header-container {
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100%;

    input {
      border: 1px solid transparent;
      color: ${colors.s_light};
      font-family: Muli;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 15px;

      :focus {
        outline: 0;
        border: 1px solid ${colors.s_extralight};
      }
    }
  }
`;

function getBorder(shape, selectedShape) {
  if (shape === selectedShape) {
    return `2px solid ${colors.shape_tools.blue3}`;
  } else {
    return `1px solid ${colors.s_ultralight}`;
  }
}

function ShapeProperty(props) {
  return (
    <EditorTools selected="shape">
      <StyledWrapper>
        <ToolsHeaderText>Shapes</ToolsHeaderText>
        <SubProperty style={{ flexWrap: "wrap", justifyContent: "start" }}>
          <Button
            width="50px"
            height="50px"
            padding="0 6px"
            borderRadius="2px"
            margin="0 15px 0px 0px"
            onClick={() => props.selectShape("star")}
            border={getBorder("star", props.selectedShape)}
            background={`url(${icons.IC_Star}) center center / 40px 40px no-repeat`}
          />
          <Button
            width="50px"
            height="50px"
            borderRadius="2px"
            margin="0 15px 0px 0px"
            background="transparent"
            onClick={() => props.selectShape("square")}
            border={getBorder("square", props.selectedShape)}
            padding={props.selectedShape === "square" ? "0 6px" : "0 7px"}
          >
            <SquareShape />
          </Button>
          <Button
            width="50px"
            height="50px"
            borderRadius="2px"
            margin="0 15px 0px 0px"
            background="transparent"
            onClick={() => props.selectShape("roundedsquare")}
            border={getBorder("roundedsquare", props.selectedShape)}
            padding={
              props.selectedShape === "roundedsquare" ? "0 6px" : "0 7px"
            }
          >
            <RoundedSquare />
          </Button>
          <Button
            width="50px"
            height="50px"
            borderRadius="2px"
            margin="0 15px 0px 0px"
            background="transparent"
            onClick={() => props.selectShape("circle")}
            border={getBorder("circle", props.selectedShape)}
            padding={props.selectedShape === "circle" ? "0 6px" : "0 7px"}
          >
            <CircleShape />
          </Button>
          <Button
            width="50px"
            height="50px"
            padding="7px"
            borderRadius="2px"
            margin="15px 15px 0px 0px"
            onClick={() => props.selectShape("triangle")}
            border={getBorder("triangle", props.selectedShape)}
            background={`url(${icons.IC_Triangle}) center center / 40px 40px no-repeat`}
          />
          <Button
            width="50px"
            height="50px"
            padding="7px"
            borderRadius="2px"
            margin="15px 15px 0px 0px"
            onClick={() => props.selectShape("pentagon")}
            border={getBorder("pentagon", props.selectedShape)}
            background={`url(${icons.IC_Pentagon}) center center / 40px 40px no-repeat`}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty>
          <p className="shape-text">Fill</p>
          <ToolbarColorPicker
            tooltipID="shape-colorpicker1"
            selectedColor={props.fillColor}
            setColor={props.setFillColor}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty>
          <p className="shape-text">Outline</p>
          <div className="shape-input-container">
            <ToolbarInput value={props.outline} onChange={props.setOutline} />
            <ToolbarColorPicker
              tooltipID="shape-colorpicker2"
              selectedColor={props.outlineColor}
              setColor={props.setOutlineColor}
            />
          </div>
        </SubProperty>
        <ToolbarPropDivider />
      </StyledWrapper>
      <StyledWrapper
        padding="0 5px"
        borderLeft={`6px solid ${colors.shape_tools.border}`}
      >
        <SubProperty>
          <div className="header-container">
            <input defaultValue="Shape 1" />
            <Button
              padding="7px"
              background={`url(${icons.IC_Delete}) center center / 13px 13px no-repeat`}
              onClick={props.handleDelete}
            />
          </div>
        </SubProperty>
        <SubProperty>
          <ToolbarTextInput label="Start" defaultValue="0:00:0" />
        </SubProperty>
        <SubProperty>
          <ToolbarTextInput label="End" defaultValue="1:00:0" />
        </SubProperty>
      </StyledWrapper>

      {props.shapes.map((shape) => (
        <StyledWrapper
          padding="0 5px"
          borderLeft={`6px solid ${colors.shape_tools.border}`}
        >
          <SubProperty>
            <div className="header-container">
              <input value={shape.name} />
              <Button
                padding="7px"
                background={`url(${icons.IC_Delete}) center center / 13px 13px no-repeat`}
                onClick={props.handleDelete}
              />
            </div>
          </SubProperty>
          <SubProperty>
            <ToolbarTextInput
              label="Start"
              value={shape.start}
              defaultValue="0:00:0"
            />
          </SubProperty>
          <SubProperty>
            <ToolbarTextInput
              label="End"
              value={shape.end}
              defaultValue="1:00:0"
            />
          </SubProperty>
        </StyledWrapper>
      ))}
    </EditorTools>
  );
}

export default ShapeProperty;

ShapeProperty.propTypes = {
  selectedShape: PropTypes.string,
  fillColor: PropTypes.string,
  outline: PropTypes.number,
  outlineColor: PropTypes.string,
  shapes: PropTypes.array,
  selectShape: PropTypes.func,
  setFillColor: PropTypes.func,
  setOutline: PropTypes.func,
  setOutlineColor: PropTypes.func,
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func,
};

ShapeProperty.defaultProps = {
  selectedShape: "square",
  fillColor: colors.palette[7],
  outline: 2,
  outlineColor: colors.palette[0],
  shapes: [],
  selectShape: () => {},
  setFillColor: () => {},
  setOutline: () => {},
  setOutlineColor: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
};
