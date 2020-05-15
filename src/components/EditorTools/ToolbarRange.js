import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRange = styled.input`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 4px;
  -webkit-appearance: none;
  background: ${(props) => `linear-gradient(
    to right,
    #00BFFF 0%,
    #00BFFF ${props.value * (100 / props.max)}%,
    rgba(20, 41, 69, 0.05) ${props.value * (100 / props.max)}%,
    rgba(20, 41, 69, 0.05) 100%
  )`};

  &:focus {
    outline: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 50%;
    cursor: pointer;
    height: 22px;
    width: 22px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-moz-range-thumb {
    border: 0;
    appearance: none;
    border-radius: 50%;
    cursor: pointer;
    height: 22px;
    width: 22px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }
`;

function ToolbarRange(props) {
  return <StyledRange {...props} type="range" />;
}

export default ToolbarRange;

ToolbarRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
};

ToolbarRange.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 60,
  width: "300px",
  height: "8px",
  onChange: () => {},
};