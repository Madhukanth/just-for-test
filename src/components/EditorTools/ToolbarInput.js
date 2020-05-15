import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 34px;
  width: 80px;
  border: 1px solid rgba(20, 41, 69, 0.1);

  border-radius: 2px;
  color: #142945;
  font-family: Muli;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;

  &:focus {
    outline: 0;
  }
`;

function ToolbarInput(props) {
  return <StyledInput {...props} />;
}

export default ToolbarInput;
