import React from "react";
import styled from "styled-components";

const StyledIcon = styled.button`
  width: 38px;
  height: 38px;
  border: 0;
  margin: 6px 5px;
  border-radius: 50%;
  background: ${(props) => `url(${props.src})`};
  background-color: ${(props) => (props.selected ? "#00BFFF" : "transparent")};
  background-size: 38px 38px;
  background-position: center;
  background-repeat: no-repeat;

  &:focus {
    outline: 0;
  }
`;

function ToolIcon(props) {
  return <StyledIcon {...props} onClick={props.onClick} />;
}

export default ToolIcon;
