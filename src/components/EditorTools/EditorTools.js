import React from "react";
import styled from "styled-components";

import { colors } from "../themes/base";

import Toolbar from "./Toolbar";
import Button from "../common/Button";

const StyledWrapper = styled.div`
  display: flex;
  padding: 3rem;
  justify-content: center;

  .properties-container {
    width: 340px;
    border-radius: 3px;
    position: relative;
    background-color: ${colors.white};
    box-shadow: 0 2px 10px 0 ${colors.shadow};

    .button-container {
      width: 330px;
      display: flex;
      margin: 20px 10px;
    }

    .bottom-buttons {
      bottom: 0;
      width: 255px;
      display: flex;
      padding: 20px 20px 20px 65px;
      position: absolute;
      justify-content: space-between;
    }
  }
`;

function EditorTools(props) {
  return (
    <StyledWrapper>
      <div className="properties-container">
        <div className="button-container">
          <Button height="34px" borderRadius="19px" margin="7px">
            Editing Tool
          </Button>
          <Button
            margin="7px"
            height="34px"
            color={colors.secondary}
            borderRadius="19px"
            background="rgba(20, 41, 69,0.03)"
          >
            Report
          </Button>
        </div>

        {props.children}

        <div className="bottom-buttons">
          <Button
            height="54px"
            fontSize="16px"
            fontWeight="600"
            color={colors.tertiary}
            background="transparent"
            padding="0"
          >
            Cancel
          </Button>
          <Button
            width="140px"
            fontSize="16px"
            fontWeight="600"
            textTransform="uppercase"
          >
            Apply
          </Button>
        </div>
      </div>

      <Toolbar selected={props.selected} />
    </StyledWrapper>
  );
}

export default EditorTools;
