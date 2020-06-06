import styled from "styled-components";

import { colors } from "../themes/base";

const SliderText = styled.div`
  display: flex;
  justify-content: space-between;
  height: 37px;
  color: ${colors.secondary};
  font-family: Muli;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 15px;
  text-transform: capitalize;
`;

export default SliderText;
