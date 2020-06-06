import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "../themes/base";

import EditorTools from "./EditorTools";
import SliderText from "../common/SliderText";
import AnchorText from "../common/AnchorText";
import SubProperty from "../common/SubProperty";
import ToolbarRange from "../common/ToolbarRange";
import ToolsHeaderText from "../common/ToolsHeaderText";
import ToolbarPropDivider from "../common/ToolbarPropDivider";

const StyledWrapper = styled.div`
  padding: 0 10px;
  height: 680px;
  overflow: scroll;

  .header-container {
    display: flex;
    justify-content: space-between;
  }

  .text-container {
    display: flex;
    justify-content: space-between;
    height: 37px;
    color: ${colors.secondary};
    font-family: Muli;
    font-size: 13px;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: capitalize;
  }
`;

function ContrastProperty(props) {
  return (
    <EditorTools selected="contrast">
      <StyledWrapper>
        <div className="header-container">
          <ToolsHeaderText>Adjust</ToolsHeaderText>
          <AnchorText style={{ margin: "10px" }} href="https://google.com">
            Reset
          </AnchorText>
        </div>
        <SubProperty style={{ flexDirection: "column" }}>
          <SliderText>
            <p>Brightness</p>
            <p>{props.brightness}</p>
          </SliderText>
          <ToolbarRange
            value={props.brightness}
            onChange={props.setBrightness}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty style={{ flexDirection: "column" }}>
          <SliderText>
            <p>Contrast</p>
            <p>{props.contrast}</p>
          </SliderText>
          <ToolbarRange value={props.contrast} onChange={props.setContrast} />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty style={{ flexDirection: "column" }}>
          <SliderText>
            <p>Saturation</p>
            <p>{props.saturation}</p>
          </SliderText>
          <ToolbarRange
            value={props.saturation}
            onChange={props.setSaturation}
          />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty style={{ flexDirection: "column" }}>
          <SliderText>
            <p>Exposure</p>
            <p>{props.exposure}</p>
          </SliderText>
          <ToolbarRange value={props.exposure} onChange={props.setExposure} />
        </SubProperty>
      </StyledWrapper>
    </EditorTools>
  );
}

export default ContrastProperty;

ContrastProperty.propTypes = {
  brightness: PropTypes.number,
  contrast: PropTypes.number,
  saturation: PropTypes.number,
  exposure: PropTypes.number,
  setBrightness: PropTypes.func,
  setContrast: PropTypes.func,
  setSaturation: PropTypes.func,
  setExposure: PropTypes.func,
};

ContrastProperty.defaultProps = {
  brightness: 1,
  contrast: 1,
  saturation: 1,
  exposure: 0,
  setBrightness: () => {},
  setContrast: () => {},
  setSaturation: () => {},
  setExposure: () => {},
};
