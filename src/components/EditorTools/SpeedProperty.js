import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "../themes/base";

import EditorTools from "./EditorTools";
import AnchorText from "../common/AnchorText";
import SliderText from "../common//SliderText";
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
`;

const SpeedButton = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 2px;
  background: transparent;
  border: ${(props) =>
    props.selected
      ? `2px solid ${colors.speed_tools.border}`
      : "1px solid rgba(20, 41, 69,0.1)"};

  color: #142945;
  font-family: Muli;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;
  margin-right: 20px;

  :focus {
    outline: 0;
  }
`;

function SpeedProperty(props) {
  return (
    <EditorTools selected="speed">
      <StyledWrapper>
        <div className="header-container">
          <ToolsHeaderText>Video Speed</ToolsHeaderText>
          <AnchorText style={{ margin: "10px" }} href="https://google.com">
            Reset
          </AnchorText>
        </div>
        <SubProperty>
          <div>
            <SpeedButton selected={props.speed === 0.5}>0.5x</SpeedButton>
            <SpeedButton selected={props.speed === 1}>1x</SpeedButton>
            <SpeedButton selected={props.speed === 1.5}>1.5x</SpeedButton>
            <SpeedButton selected={props.speed === 2}>2x</SpeedButton>
          </div>
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty style={{ flexDirection: "column" }}>
          <SliderText>
            <p>Speed</p>
            <p>{props.speed}</p>
          </SliderText>
          <ToolbarRange
            max={2}
            min={0.5}
            step={0.5}
            value={1}
            onChange={props.setSpeed}
          />
        </SubProperty>
      </StyledWrapper>
    </EditorTools>
  );
}

export default SpeedProperty;

SpeedProperty.propTypes = {
  speed: PropTypes.number,
  setSpeed: PropTypes.func,
};

SpeedProperty.defaultProps = {
  speed: 1,
  setSpeed: () => {},
};
