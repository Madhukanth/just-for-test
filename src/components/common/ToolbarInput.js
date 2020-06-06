import React from "react";
import styled from "styled-components";

import { colors } from "../themes/base";

const StyledInput = styled.input`
  height: 34px;
  width: 80px;
  border: 1px solid ${colors.s_extralight};
  box-sizing: border-box;
  border-radius: 2px;
  color: ${colors.secondary};
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
