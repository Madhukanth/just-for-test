import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import EditorTools from "./EditorTools";
import AnchorText from "../common/AnchorText";
import SubProperty from "../common/SubProperty";
import ToolbarRange from "../common/ToolbarRange";
import ToolsHeaderText from "../common/ToolsHeaderText";
import ToolbarPropDivider from "../common/ToolbarPropDivider";

const StyledWrapper = styled.div`
  padding: 0 10px;

  .header-container {
    display: flex;
    justify-content: space-between;
  }

  .text-container {
    display: flex;
    justify-content: space-between;
    height: 37px;
    color: #142945;
    font-family: Muli;
    font-size: 13px;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: capitalize;
  }
`;

function AdjustProperty(props) {
  return (
    <EditorTools>
      <StyledWrapper>
        <div className="header-container">
          <ToolsHeaderText>Adjust</ToolsHeaderText>
          <AnchorText style={{ margin: "10px" }} href="https://google.com">
            Reset
          </AnchorText>
        </div>
        <SubProperty style={{ flexDirection: "column" }}>
          <div className="text-container">
            <p>Brightness</p>
            <p>{props.brightness}</p>
          </div>
          <ToolbarRange
            value={props.brightness}
            onChange={props.setBrightness}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty style={{ flexDirection: "column" }}>
          <div className="text-container">
            <p>Contrast</p>
            <p>{props.contrast}</p>
          </div>
          <ToolbarRange value={props.contrast} onChange={props.setContrast} />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty style={{ flexDirection: "column" }}>
          <div className="text-container">
            <p>Saturation</p>
            <p>{props.saturation}</p>
          </div>
          <ToolbarRange
            value={props.saturation}
            onChange={props.setSaturation}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty style={{ flexDirection: "column" }}>
          <div className="text-container">
            <p>Exposure</p>
            <p>{props.exposure}</p>
          </div>
          <ToolbarRange value={props.exposure} onChange={props.setExposure} />
        </SubProperty>
      </StyledWrapper>
    </EditorTools>
  );
}

export default AdjustProperty;

AdjustProperty.propTypes = {
  brightness: PropTypes.number,
  contrast: PropTypes.number,
  saturation: PropTypes.number,
  exposure: PropTypes.number,
  setBrightness: PropTypes.func,
  setContrast: PropTypes.func,
  setSaturation: PropTypes.func,
  setExposure: PropTypes.func,
};

AdjustProperty.defaultProps = {
  brightness: 1,
  contrast: 1,
  saturation: 1,
  exposure: 0,
  setBrightness: () => {},
  setContrast: () => {},
  setSaturation: () => {},
  setExposure: () => {},
};
