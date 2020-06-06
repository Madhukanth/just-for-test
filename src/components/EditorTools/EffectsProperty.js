import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { icons, colors } from "../themes/base";

import EditorTools from "./EditorTools";

import SubProperty from "../common/SubProperty";
import ToolsHeaderText from "../common/ToolsHeaderText";

const StyledWrapper = styled.div`
  padding: ${(props) => props.padding || "0 10px"};
  height: 680px;
  overflow: scroll;

  .effect-container {
    height: 150px;
    position: relative;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 6px;

    .effect-text {
      position: absolute;
      bottom: 0px;
      left: 15px;
      color: ${colors.white};
      font-family: Muli;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 18px;
      font-weight: 400;
    }

    .effect-image {
      flex-direction: column;
      height: 150px;
      border-radius: 4px;
      background: url(${icons.IC_Banner}) center center / 300px 150px no-repeat;
      background-size: cover;
      filter: brightness(0.6);
    }
  }
`;

function EffectsProperty(props) {
  return (
    <EditorTools selected="effect">
      <StyledWrapper>
        <ToolsHeaderText>Effects</ToolsHeaderText>
        <SubProperty
          className="effect-container"
          selected={props.effect === "None"}
          onClick={props.handleSelect}
        >
          <div className="effect-image" />
          <p className="effect-text">None</p>
        </SubProperty>
        <SubProperty
          className="effect-container"
          selected={props.effect === "VHS"}
          onClick={props.handleSelect}
        >
          <div className="effect-image" />
          <p className="effect-text">VHS</p>
        </SubProperty>
        <SubProperty
          className="effect-container"
          selected={props.effect === "Glitch"}
          onClick={props.handleSelect}
        >
          <div className="effect-image" />
          <p className="effect-text">Glitch</p>
        </SubProperty>
        <SubProperty
          className="effect-container"
          selected={props.effect === "Old"}
          onClick={props.handleSelect}
        >
          <div className="effect-image" />
          <p className="effect-text">Old</p>
        </SubProperty>
        <SubProperty
          className="effect-container"
          selected={props.effect === "Heu"}
          onClick={props.handleSelect}
        >
          <div className="effect-image" />
          <p className="effect-text">Heu</p>
        </SubProperty>
      </StyledWrapper>
    </EditorTools>
  );
}

export default EffectsProperty;

EffectsProperty.propTypes = {
  effect: PropTypes.string,
  handleSelect: PropTypes.func,
};

EffectsProperty.defaultProps = {
  effect: "None",
  handleSelect: () => {},
};
