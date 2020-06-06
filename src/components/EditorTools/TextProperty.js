import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { icons, colors } from "../themes/base";

import EditorTools from "./EditorTools";
import Button from "../common/Button";
import SubProperty from "../common/SubProperty";
import ToolbarDropdown from "../common/ToolbarDropdown";
import ToolsHeaderText from "../common/ToolsHeaderText";
import ToolbarColorPicker from "../common/ToolbarColorPicker";
import ToolbarPropDivider from "../common/ToolbarPropDivider";
import ToolbarTextInput from "../common/ToolbarTextInput";

const StyledWrapper = styled.div`
  padding: ${(props) => props.padding || "0 10px"};
  border-left: ${(props) => props.borderLeft};

  .header-input {
    height: 34px;
    width: 150px;
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

  .text-notes {
    border: 0;
    box-sizing: border-box;
    height: 120px;
    width: 300px;
    border-radius: 2px;
    background-color: ${colors.s_superlight};
    color: ${colors.secondary};
    font-family: Muli;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    caret-color: ${colors.text_tools.caret};
    resize: none;
    padding: 10px;

    :focus {
      outline: 0;
    }
  }

  .duration-container {
    display: flex;
    justify-content: space-between;

    .duration-prop {
      display: flex;
      color: ${colors.s_light};
      font-family: Muli;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 13px;

      .duration-input {
        border: 0;
        padding: 5px;
        color: ${colors.secondary};
        font-family: Muli;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 13px;
        width: 50px;

        :focus {
          outline: 0;
        }
      }
    }
  }
`;

function TextProperty(props) {
  return (
    <EditorTools selected="text">
      <StyledWrapper>
        <ToolsHeaderText>Text</ToolsHeaderText>
        <SubProperty>
          <ToolbarDropdown
            value={props.fontFamily}
            options={["Vedata", "Muli", "Sans-seriff", "Timesnewroman"]}
            handleChange={props.setFontFamily}
          />
          <ToolbarColorPicker
            tooltipID="text-colorpicker"
            selectedColor={props.selectedColor}
            setColor={props.setColor}
            opacity={props.opacity}
            setOpacity={props.setOpacity}
          />
        </SubProperty>
        <SubProperty>
          <ToolbarDropdown
            width="87px"
            value={props.fontSize}
            options={[
              "2",
              "4",
              "8",
              "12",
              "16",
              "18",
              "22",
              "24",
              "35",
              "48",
              "60",
              "72",
            ]}
            handleChange={props.setFontSize}
          />
          <ToolbarDropdown
            width="87px"
            fontSize="13px"
            fontWeight={600}
            value="Left"
            options={["Left", "Center", "Right"]}
            handleChange={props.setAlign}
          />
          <ToolbarDropdown
            width="86px"
            fontSize="14px"
            fontWeight={600}
            value="B"
            options={["B", "I", "U"]}
            handleChange={props.setFontStyle}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty>
          <ToolbarTextInput
            label="Letter Spacing"
            value="0.00"
            onChange={props.setLetterSpace}
          />
        </SubProperty>
        <SubProperty>
          <ToolbarTextInput
            label="Line Height"
            value="1.00"
            onChange={props.setLineHeight}
          />
        </SubProperty>
        <ToolbarPropDivider />
      </StyledWrapper>

      {props.layers.map((layer) => (
        <StyledWrapper
          key={layer.id}
          padding="0 5px"
          borderLeft={`6px solid ${colors.text_tools.border}`}
        >
          <SubProperty style={{ flexDirection: "column" }}>
            <input className="header-input" value={layer.name} />
            <textarea
              className="text-notes"
              defaultValue="Sample Text"
              value={layer.text}
            />
            <div className="duration-container">
              <div className="duration-prop">
                <p>Start:</p>
                <input
                  value={layer.start}
                  defaultValue="00:00:0"
                  className="duration-input"
                />

                <p>End:</p>
                <input
                  value={layer.end}
                  defaultValue="03:04:0"
                  className="duration-input"
                />
              </div>
              <Button
                padding="7px"
                background={`url(${icons.IC_Delete}) center center / 13px 13px no-repeat`}
                onClick={() => props.handleDelete(layer.id)}
              />
            </div>
          </SubProperty>
        </StyledWrapper>
      ))}

      <StyledWrapper padding="0 5px" borderLeft={`6px solid ${colors.primary}`}>
        <SubProperty style={{ flexDirection: "column" }}>
          <input className="header-input" defaultValue="Layer 1" />
          <textarea className="text-notes" defaultValue="Sample Text" />
          <div className="duration-container">
            <div className="duration-prop">
              <p>Start:</p>
              <input defaultValue="00:00:0" className="duration-input" />

              <p>End:</p>
              <input defaultValue="03:04:0" className="duration-input" />
            </div>
            <Button
              padding="7px"
              background={`url(${icons.IC_Delete}) center center / 13px 13px no-repeat`}
            />
          </div>
        </SubProperty>
      </StyledWrapper>
      <StyledWrapper>
        <SubProperty>
          <Button
            fontSize="10px"
            fontWeight="600"
            color="#142945"
            padding="14px 5px 10px 30px"
            background={`url(${icons.IC_Add_Layer}) left center / 23px 23px no-repeat`}
            onClick={props.handleAdd}
          >
            Add New Text
          </Button>
        </SubProperty>
      </StyledWrapper>
    </EditorTools>
  );
}

export default TextProperty;

TextProperty.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  align: PropTypes.string,
  fontStyle: PropTypes.string,
  letterSpace: PropTypes.string,
  lineHeight: PropTypes.string,
  selectedColor: PropTypes.string,
  opacity: PropTypes.number,
  layers: PropTypes.array,
  setFontFamily: PropTypes.func,
  setFontSize: PropTypes.func,
  setAlign: PropTypes.func,
  setFontStyle: PropTypes.func,
  setLetterSpace: PropTypes.func,
  setLineHeight: PropTypes.func,
  setColor: PropTypes.func,
  setOpacity: PropTypes.func,
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func,
};

TextProperty.defaultProps = {
  fontFamily: "Helvetica",
  fontSize: "48",
  align: "Left",
  fontStyle: "B",
  letterSpace: "0.00",
  lineHeight: "1.00",
  selectedColor: colors.palette[7],
  opacity: 30,
  layers: [],
  setFontFamily: () => {},
  setFontSize: () => {},
  setAlign: () => {},
  setFontStyle: () => {},
  setLetterSpace: () => {},
  setLineHeight: () => {},
  setColor: () => {},
  setOpacity: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
};
