import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Slider from "./Slider";
import Timeline from "./Timeline";

import EyeOpen from "./eye_open.png";
import EyeClose from "./eye_close.png";
import DeleteIcon from "./rubbish.png";
import AudioSectionPng from "./audio-section.png";
import VideoSectionPng from "./video-section.png";

const MainContainer = styled.div`
  margin: 10rem;
  color: #142945;
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
    border-left: 1px solid #dedede;
    border-right: 1px solid #dedede;
    width: 578px;
    height: 22px;
    background: white;
  }

  .layer:first-child {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;

    .timeline-container {
      border-top: 1px solid #dedede;
    }
  }

  .layer:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom: 0;

    .timeline-container {
      border-bottom: 1px solid #dedede;
    }
  }
`;

const LayerContainer = styled.div`
  background: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 720px;
  border-bottom: 1px solid rgba(187, 187, 187, 0.3);

  .visibility-container {
    width: 117px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    p {
      text-transform: capitalize;
      color: ${(props) =>
        props.disabled ? "rgba(20,41,69,0.3)" : props.primaryColor};
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
            background: `url(${props.disabled ? EyeClose : EyeOpen})`,
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
          background: `url(${DeleteIcon})`,
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
  primaryColor: "#FF9C34",
  secondaryColor: "#FBE7D4",
  backgroundColor: "rgba(91,184,93, 0.15)",
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
        <img src={VideoSectionPng} alt="" />
        <p>VIDEO SECTION</p>
      </div>
      <Section>
        <SingleLayer
          title="layer 1"
          primaryColor="#FF9C34"
          secondaryColor="#FBE7D4"
          backgroundColor="rgba(255, 156, 52, 0.15)"
        />
        <SingleLayer
          disabled
          title="layer 2"
          primaryColor="#FF9C34"
          secondaryColor="#FBE7D4"
          backgroundColor="rgba(255, 156, 52, 0.15)"
        />
      </Section>

      <div className="section">
        <img src={AudioSectionPng} alt="" />
        <p>AUDIO SECTION</p>
      </div>
      <Section>
        <SingleLayer
          title="layer 1"
          primaryColor="#5BB85D"
          secondaryColor="#DBEEDD"
          backgroundColor="rgba(91,184,93, 0.15)"
        />
        <SingleLayer
          disabled
          title="layer 2"
          primaryColor="#5BB85D"
          secondaryColor="#DBEEDD"
          backgroundColor="rgba(91,184,93, 0.15)"
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
