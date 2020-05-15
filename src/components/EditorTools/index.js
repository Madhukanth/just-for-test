import React from "react";
import styled from "styled-components";

import VideoProperties from "./VideoProperties";
import Toolbar from "./Toolbar";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function EditorTools(props) {
  return (
    <StyledWrapper>
      <VideoProperties />
      <Toolbar />
    </StyledWrapper>
  );
}

export default EditorTools;
