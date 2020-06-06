import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../themes/base";

const SubProperty = styled.div`
  display: flex;
  width: 301px;
  position: relative;
  justify-content: space-between;
  position: relative;
  margin: 15px 10px;
  background: ${(props) => props.background};
  border: ${(props) => (props.selected ? `3px solid ${colors.brand}` : "none")};
`;

export default SubProperty;

SubProperty.propTypes = {
  background: PropTypes.string,
  border: PropTypes.string,
};

SubProperty.defaultProps = {
  background: "none",
  border: "none",
};
