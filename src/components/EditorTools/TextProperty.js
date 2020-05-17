import React from "react";
import styled from "styled-components";

import EditorTools from "./EditorTools";
import Button from "../common/Button";
import IC_Delete from "./icons/ic_delete.png";
import IC_Add_Layer from "./icons/ic_add_layer.png";
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
    color: rgba(20, 41, 69, 0.5);
    font-family: Muli;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 15px;

    :focus {
      outline: 0;
      border: 1px solid rgba(20, 41, 69, 0.1);
    }
  }

  .text-notes {
    border: 0;
    box-sizing: border-box;
    height: 120px;
    width: 300px;
    border-radius: 2px;
    background-color: rgba(20, 41, 69, 0.03);
    color: #142945;
    font-family: Muli;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    caret-color: #0091ff;
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
      color: rgba(20, 41, 69, 0.5);
      font-family: Muli;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 13px;

      .duration-input {
        border: 0;
        padding: 5px;
        color: #142945;
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
            value="Helvetica"
            options={["Vedata", "Muli", "Sans-seriff", "Timesnewroman"]}
            handleChange={(v) => console.log(v)}
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
            value={"48"}
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
            handleChange={(v) => console.log(v)}
          />
          <ToolbarDropdown
            width="87px"
            fontSize="13px"
            fontWeight={600}
            value="Left"
            options={["Left", "Center", "Right"]}
            handleChange={(v) => console.log(v)}
          />
          <ToolbarDropdown
            width="86px"
            fontSize="14px"
            fontWeight={600}
            value="B"
            options={["B", "I", "U"]}
            handleChange={(v) => console.log(v)}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty>
          <ToolbarTextInput label="Letter Spacing" value="0.00" />
        </SubProperty>
        <SubProperty>
          <ToolbarTextInput label="Line Height" value="1.00" />
        </SubProperty>
        <ToolbarPropDivider />
      </StyledWrapper>
      <StyledWrapper padding="0 5px" borderLeft="6px solid #00BFFF">
        <SubProperty style={{ flexDirection: "column" }}>
          <input className="header-input" value="Layer 1" />
          <textarea className="text-notes" defaultValue="Sample Text" />
          <div className="duration-container">
            <div className="duration-prop">
              <p>Start:</p>
              <input defaultValue="00:00:0" className="duration-input" />

              <p>End:</p>
              <input defaultValue="03:04:0" className="duration-input" />
            </div>
            <Button
              padding="auto"
              background={`url(${IC_Delete}) center center / 13px 13px no-repeat`}
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
            background={`url(${IC_Add_Layer}) left center / 23px 23px no-repeat`}
          >
            Add New Text
          </Button>
        </SubProperty>
      </StyledWrapper>
    </EditorTools>
  );
}

export default TextProperty;
