import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Slider from "./Slider";
import Timeline from "./Timeline";

import { icons, colors } from "../themes/base";

const MainContainer = styled.div`
  margin: 10rem;
  color: ${colors.secondary};
  font-size: 13px;
  font-weight: bold;
  font-family: "Muli", sans-serif;

  .section {
    height: 24px;
    width: 125px;
    display: flex;
    margin-top: 18px;
    margin-bottom: 10px;
    align-items: center;
    text-transform: uppercase;
    justify-content: space-between;

    img {
      width: 14px;
      height: 14px;
    }
  }
`;

// background-image: url(https://images0.pixlis.com/background-image-vertical-lines-and-stripes-seamless-tileable-grey-white-22ramo.png);
//     background-repeat: repeat;
//     background-size: 170px 170px;

const Section = styled.div`
  .timeline-container {
    padding: 10px;
    border-left: 1px solid ${colors.white1};
    border-right: 1px solid ${colors.white1};
    width: 578px;
    height: 22px;
    background: ${colors.white};
  }

  .layer:first-child {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;

    .timeline-container {
      border-top: 1px solid ${colors.white1};
    }
  }

  .layer:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom: 0;

    .timeline-container {
      border-bottom: 1px solid ${colors.white1};
    }
  }
`;

const LayerContainer = styled.div`
  background: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 720px;
  border-bottom: 1px solid ${colors.tools_slider.layerBorder};

  .visibility-container {
    width: 117px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    p {
      text-transform: capitalize;
      color: ${(props) =>
        props.disabled ? colors.s_verylight : props.primaryColor};
    }
  }
`;

const Button = styled.button`
  border: 0;
  font-size: 15px;
  cursor: pointer;
  border-radius: 3px;
  width: 17px;
  height: 17px;
  background: transparent;

  &:focus {
    outline: 0;
  }
`;

function SingleLayer(props) {
  return (
    <LayerContainer
      className="layer"
      primaryColor={props.primaryColor}
      backgroundColor={props.backgroundColor}
    >
      <div className="visibility-container">
        <Button
          style={{
            background: `url(${
              props.disabled ? icons.IC_EyeClose : icons.IC_EyeOpen
            })`,
            backgroundSize: "17px 17px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={props.onEyeClick}
        ></Button>
        <p>{props.title}</p>
      </div>
      <Slider
        disabled={props.disabled}
        regions={props.regions}
        onChange={props.onChange}
        primaryColor={props.primaryColor}
        secondaryColor={props.secondaryColor}
      />
      <Button
        style={{
          opacity: 0.5,
          width: "29px",
          background: `url(${icons.IC_DeleteIcon})`,
          backgroundSize: "13px 13px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={props.onDelete}
      ></Button>
    </LayerContainer>
  );
}

SingleLayer.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  regions: PropTypes.array,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  onEyeClick: PropTypes.func,
};

SingleLayer.defaultProps = {
  disabled: false,
  title: "layer 1",
  primaryColor: colors.tools_slider.video_primary,
  secondaryColor: colors.tools_slider.video_secondary,
  backgroundColor: colors.tools_slider.video_background,
  regions: [1, 10, 20, 30, 50, 55, 70, 90],
  onChange: () => {},
  onDelete: () => {},
  onEyeClick: () => {},
};

function Layer(props) {
  return (
    <MainContainer>
      <Timeline duration={props.duration} />
      <div className="section">
        <img src={icons.IC_VideoSectionPng} alt="" />
        <p>VIDEO SECTION</p>
      </div>
      <Section>
        <SingleLayer
          title="layer 1"
          primaryColor={colors.tools_slider.video_primary}
          secondaryColor={colors.tools_slider.video_secondary}
          backgroundColor={colors.tools_slider.video_background}
        />
        <SingleLayer
          disabled
          title="layer 2"
          primaryColor={colors.tools_slider.video_primary}
          secondaryColor={colors.tools_slider.video_secondary}
          backgroundColor={colors.tools_slider.video_background}
        />
      </Section>

      <div className="section">
        <img src={icons.IC_AudioSectionPng} alt="" />
        <p>AUDIO SECTION</p>
      </div>
      <Section>
        <SingleLayer
          title="layer 1"
          primaryColor={colors.tools_slider.audio_primary}
          secondaryColor={colors.tools_slider.audio_secondary}
          backgroundColor={colors.tools_slider.audio_background}
        />
        <SingleLayer
          disabled
          title="layer 2"
          primaryColor={colors.tools_slider.audio_primary}
          secondaryColor={colors.tools_slider.audio_secondary}
          backgroundColor={colors.tools_slider.audio_background}
        />
      </Section>
    </MainContainer>
  );
}

export default Layer;

Layer.propTypes = {
  duration: PropTypes.number,
};

Layer.defaultProps = {
  duration: 90,
};
