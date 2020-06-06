import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";
import styled from "styled-components";
import "react-dropdown/style.css";

import { colors } from "../themes/base";

const StyledDropDown = styled.div`
  .toolbar-dropdown {
    height: 34px;
    width: ${(props) => props.width};
    border: 0;
    border-radius: 2px;
    background-color: ${colors.s_superlight};

    color: ${colors.secondary};
    font-family: Muli;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    letter-spacing: 0;
    line-height: 15px;

    &-menu {
      border: 0;
      border-radius: 2px;
      background-color: ${colors.white};
      color: ${colors.secondary};
      font-family: Muli;
      font-size: ${(props) => props.fontSize};
      font-weight: ${(props) => props.fontWeight};
      letter-spacing: 0;
      line-height: 15px;
    }

    .dropdown-arrow {
      top: 11px;
      box-sizing: border-box;
      height: 7px;
      width: 7px;
      border: 1px solid ${colors.primary};
      transform: rotate(132deg);
      border-bottom: 0px;
      border-left: 0px;
    }
  }
`;

function ToolbarDropdown(props) {
  return (
    <StyledDropDown {...props}>
      <Dropdown
        menuClassName="toolbar-dropdown-menu"
        controlClassName="toolbar-dropdown"
        arrowClassName="dropdown-arrow"
        options={props.options}
        onChange={props.handleChange}
        value={props.value}
      />
    </StyledDropDown>
  );
}

export default ToolbarDropdown;

ToolbarDropdown.propTypes = {
  width: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
};

ToolbarDropdown.defaultProps = {
  width: "246px",
  fontSize: "12px",
  fontWeight: 400,
};
