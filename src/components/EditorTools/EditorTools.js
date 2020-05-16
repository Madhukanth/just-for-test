import React from "react";
import styled from "styled-components";

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
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(44, 137, 255, 0.1);

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
            color="#142945"
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
            color="#8994A2"
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

      <Toolbar />
    </StyledWrapper>
  );
}

export default EditorTools;
