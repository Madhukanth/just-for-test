import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  padding: 7px;

  .item {
    @media all and (max-width: 1000px) {
      width: calc(25% - 14px);
    }

    @media all and (max-width: 1000px) {
      width: calc(33.333% - 14px);
    }

    @media all and (max-width: 600px) {
      width: calc(50% - 14px);
    }

    @media all and (max-width: 500px) {
      width: calc(100% - 14px);
    }

    height: 200px;
    width: calc(20% - 14px);
    background: red;
    margin: 7px;
  }
`;

const FlexTest = () => {
  return (
    <FlexWrapper>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </FlexWrapper>
  );
};

export default FlexTest;
