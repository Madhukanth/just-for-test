import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "../themes/base";

const StyledWrapper = styled.div`
  height: 34px;
  width: 300px;
  display: flex;
  padding: 0 10px;
  border-radius: 2px;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.s_superlight};

  color: ${colors.s_light};
  font-family: Muli;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 15px;
  text-transform: capitalize;

  input {
    border: 0;
    width: 45px;
    font-size: 12px;
    text-align: end;
    font-weight: 400;
    background: transparent;

    :focus {
      outline: 0;
    }
  }
`;

function ToolbarTextInput(props) {
  return (
    <StyledWrapper>
      <p>{props.label}</p>
      <input value={props.value} onChange={props.onChange} />
    </StyledWrapper>
  );
}

export default ToolbarTextInput;

ToolbarTextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

ToolbarTextInput.defaultProps = {
  label: "Letter Spacing",
  value: "0.00",
  onChange: () => {},
};
