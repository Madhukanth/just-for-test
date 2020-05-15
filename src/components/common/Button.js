import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  box-sizing: border-box;
  line-height: 0;
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  text-transform: ${(props) => props.textTransform};
  background-color: ${(props) => props.background};
  box-shadow: ${(props) => props.boxShadow};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 0;
  }
`;

const Button = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  textTransform: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  margin: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  width: "auto",
  height: "auto",
  fontFamily: '"Muli", sans-serif',
  background: "#00BFFF",
  color: "#FFFFFF",
  boxShadow: "none",
  padding: "1rem 1.5rem .9rem 1.5rem",
  fontSize: "14px",
  border: "none",
  borderRadius: "3px",
  textTransform: "capitalize",
  margin: "0px",
  disabled: false,
};
