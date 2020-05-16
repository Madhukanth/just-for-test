import React, { useState } from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";
import _ from "lodash";
import uuidv4 from "uuid/v4";

// import DeleteIcon from "./rubbish.png";

// const CustomButton = styled.button`
//   border: 0;
//   float: right;
//   cursor: pointer;
//   transition: all 0.3s;
//   background: transparent;
//   transform: ${(props) => (props.showModal ? "rotate(45deg)" : "rotate(0deg)")};

//   &:focus {
//     outline: 0;
//   }
// `;

const Button = styled.button`
  border: 0;
  font-size: 15px;
  cursor: pointer;
  margin-right: 2px;
  margin-left: auto;
  border-radius: 3px;
  background: white;

  &:focus {
    outline: 0;
  }
`;

const StyledThumb = styled.div`
  width: 2px;
  height: 20px;
  text-align: center;

  cursor: ${(props) => (props.disabled ? "none" : "col-resize")};

  &:focus {
    outline: 0;
  }
`;
const Thumb = (props) => <StyledThumb {...props} />;

const getTrackColor = ({ index, disabled, primaryColor, secondaryColor }) => {
  if (index % 2 === 1) {
    if (disabled) {
      return secondaryColor;
    } else {
      return primaryColor;
    }
  } else {
    return "transparent";
  }
};

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  display: flex;
  color: black;
  overflow: hidden;
  line-height: 20px;
  text-align: center;
  background: ${(props) => getTrackColor(props)};
`;

// box-shadow: ${(props) =>
//   props.index % 2 === 1 ? "0px 4px 11px 0px rgba(0,0,0,0.5)" : null};

const SelectionTrack = (props) => {
  const [isMouseIn, setMouseIn] = useState(false);
  const start = props.value[props.index - 1];
  const end = props.value[props.index];

  return (
    <StyledTrack
      {...props}
      index={props.index}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      {props.index % 2 === 1 && (
        <React.Fragment>
          <p style={{ margin: "0 auto" }}>{start + " - " + end}</p>
          {props.handleAdd && isMouseIn && (
            <Button onClick={() => props.handleAdd()}>Add</Button>
          )}
        </React.Fragment>
      )}
    </StyledTrack>
  );
};

const Track = (props) => {
  // const [isMouseIn, setMouseIn] = useState(false);
  // const start = props.value[props.index - 1];
  // const end = props.value[props.index];

  return (
    <StyledTrack
      {...props}
      index={props.index}
      // onMouseEnter={() => setMouseIn(true)}
      // onMouseLeave={() => setMouseIn(false)}
    >
      {props.index % 2 === 1 && (
        <React.Fragment>
          {/* {!props.disabled && (
            <p style={{ margin: "0 auto" }}>{start + " - " + end}</p>
          )} */}
          {/* {!props.disabled && props.handleDelete && isMouseIn && (
            <Button onClick={() => props.handleDelete(start, end)}>
              <img
                style={{ height: "20px", width: "20px" }}
                src={DeleteIcon}
                alt=""
              />
            </Button>
          )} */}
        </React.Fragment>
      )}
    </StyledTrack>
  );
};

const StyledSlider = styled(ReactSlider)`
  height: 20px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

function RcSlider(props) {
  const { regions, onChange } = props;
  const [addedRegions, setAddRegions] = useState([0, 10]);
  const [showModal, setModal] = useState(false);

  function handleDelete(start, end) {
    const newRegions = regions.filter((r) => r !== start && r !== end);
    onChange(newRegions);
  }

  function handleAdd() {
    const inputArray = [addedRegions];
    let i = 0;
    while (i < regions.length) {
      inputArray.push([regions[i], regions[i + 1]]);
      i = i + 2;
    }

    const mergedArray = inputArray.slice().sort((a, b) => a[0] - b[0]);

    let j = 0;
    while (j < mergedArray.length - 1) {
      const current = mergedArray[j];
      const next = mergedArray[j + 1];

      if (current[1] >= next[0]) {
        current[1] = Math.max(current[1], next[1]);
        mergedArray.splice(j + 1, 1);
      } else {
        j++;
      }
    }

    onChange(_.flattenDeep(mergedArray));
    setAddRegions([0, 10]);
  }

  return (
    <div className="timeline-container">
      {regions.length <= 1 && (
        <StyledSlider
          pearling
          min={0}
          max={100}
          step={0.1}
          minDistance={0.1}
          value={[]}
        />
      )}

      {showModal && (
        <StyledSlider
          {...props}
          pearling
          snapDragDisabled
          min={0}
          max={100}
          step={0.1}
          minDistance={0.1}
          value={addedRegions}
          renderTrack={(trackprops, state) => (
            <SelectionTrack
              {...trackprops}
              key={uuidv4()}
              value={state.value}
              index={state.index}
              handleAdd={() => {
                handleAdd();
                setModal(false);
              }}
            />
          )}
          renderThumb={Thumb}
          onChange={(val) => {
            setAddRegions([...val]);
          }}
        />
      )}

      {regions.length > 1 && (
        <StyledSlider
          {...props}
          pearling
          snapDragDisabled
          min={0}
          max={100}
          step={0.1}
          minDistance={0.1}
          value={regions}
          // disabled={showModal}
          renderTrack={(trackprops, state) => (
            <Track
              {...props}
              {...trackprops}
              key={uuidv4()}
              value={state.value}
              index={state.index}
              // disabled={showModal}
              handleDelete={handleDelete}
            />
          )}
          renderThumb={Thumb}
          onChange={onChange}
        />
      )}
      {/* 
      <CustomButton
        showModal={showModal}
        onClick={() => {
          setAddRegions([0, 10]);
          setModal((status) => !status);
        }}
      >
        <svg
          height="30px"
          viewBox="0 0 512 512"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
            fill="#c0f"
          />
          <path
            d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"
            fill="#fafafa"
          />
        </svg>
      </CustomButton> */}
    </div>
  );
}

export default RcSlider;
