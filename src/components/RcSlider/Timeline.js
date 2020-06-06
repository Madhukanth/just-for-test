import React from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";

import { colors } from "../themes/base";

const TimeSection = styled.div`
  display: flex;
  height: 29px;
  width: 776px;
  align-items: center;
  justify-content: space-between;

  button {
    height: 29px;
    width: 84px;
    border-radius: 4px;
    border: 0;
    background-color: ${colors.primary};
    color: ${colors.white};
    font-family: Muli;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 15px;
    text-align: center;
    text-transform: capitalize;

    &:focus {
      outline: 0;
    }
  }
`;

const TimeInput = styled.input`
  box-sizing: border-box;
  height: 23px;
  width: 125px;
  border: 1px solid ${colors.white2};
  border-radius: 4px;
  background-color: ${colors.white};
  color: ${colors.secondary};
  font-family: Muli;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;

  &:focus {
    outline: 0;
  }
`;

const TimeContainer = styled.div`
  position: relative;
  width: 555px;

  .time {
    display: flex;
    width: 520px;
    justify-content: space-between;
    margin: auto;

    p {
      height: 13px;
      width: 27px;
      color: ${colors.secondary};
      font-family: Muli;
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 13px;
      text-align: center;
    }
  }
`;

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 14px;
  top: 9px;
  position: absolute !important;

  .thumb-0 {
    margin-left: 3px;
  }

  .thumb-1 {
    margin-left: -3px;
  }
`;

const StyledThumb = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${colors.white};
  color: ${colors.white};
  border-radius: 50%;
  cursor: grab;
  top: 2px;

  &:focus {
    outline: 0;
  }
`;

const toHHMMSS = (secs) => {
  var sec_num = parseInt(secs, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor(sec_num / 60) % 60;
  var seconds = sec_num % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? "0" + v : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
};

const Thumb = (props) => <StyledThumb {...props}></StyledThumb>;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  height: 14px;
  background: ${(props) =>
    props.index === 1 ? colors.tools_slider.trackBackground : "transparent"};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const RenderTime = ({ increament, duration }) => {
  const list = ["00:00"];

  let sumUp = 0;
  for (let i = 1; i <= 6; i++) {
    sumUp = sumUp + increament;
    list.push(toHHMMSS(sumUp));
  }

  return (
    <TimeContainer>
      <div className="time">
        {list.map((time) => (
          <p key={time}>{time}</p>
        ))}
      </div>
      <StyledSlider
        min={0}
        max={duration}
        defaultValue={[13, 50]}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(val) => console.log(val)}
      />
    </TimeContainer>
  );
};

function Timeline(props) {
  const { duration } = props;
  const increament = Number((duration / 6).toFixed(2));

  return (
    <TimeSection>
      <TimeInput defaultValue="00:33:51 - 00:41:34" />
      <RenderTime increament={increament} duration={duration} />

      <button>crop time</button>
    </TimeSection>
  );
}

export default Timeline;
