import styled from "styled-components";

import { colors } from "../themes/base";

const ToolbarPropDivider = styled.div`
  box-sizing: border-box;
  height: 1px;
  width: 301px;
  border: 0.3px dashed ${colors.s_extralight};
  margin: auto;
`;

export default ToolbarPropDivider;
