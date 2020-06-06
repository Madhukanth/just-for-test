import styled from "styled-components";

import { colors } from "../themes/base";

const AnchorText = styled.a`
  color: ${colors.brand};
  font-family: Muli;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;
  margin: auto 0;
  text-decoration: underline;
  cursor: pointer;
`;

export default AnchorText;
