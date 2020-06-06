import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { icons, colors } from "../themes/base";

import EditorTools from "./EditorTools";
import SliderText from "../common/SliderText";
import SubProperty from "../common/SubProperty";
import ToolbarRange from "../common/ToolbarRange";
import ToolsHeaderText from "../common/ToolsHeaderText";
import ToolbarPropDivider from "../common/ToolbarPropDivider";

const StyledWrapper = styled.div`
  padding: ${(props) => props.padding || "0 10px"};
  height: 680px;
  overflow: scroll;

  .effects-container {
    flex-wrap: wrap;
    justify-content: space-between;

    .effect-option:last-child {
      margin-right: auto;
      margin-left: 20px;
    }

    .effect-option {
      height: 108px;
      width: 86px;
      margin-top: 15px;

      .effect-text {
        font-size: 14px;
        color: ${colors.secondary};
        margin: 2px auto;
        font-family: Muli;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 18px;
        text-align: center;
        text-transform: capitalize;
      }
    }
  }

  .dark-text {
    font-weight: 600;
  }
`;

const EffectImage = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 7px;
  background: url(${icons.IC_Banner}) center center / 86px 86px no-repeat;
  background-size: cover;
  box-sizing: border-box;
  border: ${(props) =>
    props.selected ? `3px solid ${colors.primary}` : "none"};
  filter: ${(props) => props.filter || "none"};
`;

function ColorCorrectionProperty(props) {
  return (
    <EditorTools selected="correction">
      <StyledWrapper>
        <ToolsHeaderText>Filter</ToolsHeaderText>
        <SubProperty style={{ flexDirection: "column" }}>
          <SliderText>
            <p>Intensity</p>
            <p className="dark-text">{props.intensity}%</p>
          </SliderText>
          <ToolbarRange value={props.intensity} onChange={props.setIntensity} />
        </SubProperty>
        <ToolbarPropDivider />
        <SubProperty className="effects-container">
          <div className="effect-option">
            <EffectImage selected={props.effect === "None"} />
            <p className="effect-text">None</p>
          </div>
          <div className="effect-option">
            <EffectImage selected={props.effect === "Anais"} />
            <p className="effect-text">Anais</p>
          </div>
          <div className="effect-option">
            <EffectImage selected={props.effect === "aAuden"} />
            <p className="effect-text">Auden</p>
          </div>
          <div className="effect-option">
            <EffectImage
              filter="grayscale(0.9);"
              selected={props.effect === "Clayton"}
            />
            <p className="effect-text">Clayton</p>
          </div>
          <div className="effect-option">
            <EffectImage selected={props.effect === "Daisy"} />
            <p className="effect-text">Daisy</p>
          </div>
          <div className="effect-option">
            <EffectImage selected={props.effect === "Hopper"} />
            <p className="effect-text">Hopper</p>
          </div>
          <div className="effect-option">
            <EffectImage selected={props.effect === "Hyla"} />
            <p className="effect-text">Hyla</p>
          </div>
          <div className="effect-option">
            <EffectImage selected={props.effect === "Kai"} />
            <p className="effect-text">Kai</p>
          </div>
          <div className="effect-option">
            <EffectImage selected={props.effect === "Magnus"} />
            <p className="effect-text">Magnus</p>
          </div>
          <div className="effect-option">
            <EffectImage selected={props.effect === "Minnie"} />
            <p className="effect-text">Minnie</p>
          </div>
          <div className="effect-option">
            <EffectImage selected={props.effect === "Monty"} />
            <p className="effect-text">Monty</p>
          </div>
        </SubProperty>
      </StyledWrapper>
    </EditorTools>
  );
}

export default ColorCorrectionProperty;

ColorCorrectionProperty.propTypes = {
  intensity: PropTypes.number,
  setIntensity: PropTypes.func,
  effect: PropTypes.string,
  setEffect: PropTypes.func,
};

ColorCorrectionProperty.defaultProps = {
  intensity: 100,
  effect: "None",
  setIntensity: () => {},
  setEffect: () => {},
};
