import React, { useState } from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const AddButton = styled.button`
  background: transparent;
  border: 0;
  transform: ${props => (props.showModal ? "rotate(45deg)" : "rotate(0deg)")};
  transition: all 0.3s;
  cursor: pointer;
  float: right;

  &:focus {
    outline: 0;
  }
`;

const StyledThumb = styled.div`
  height: 40px;
  width: 2px;
  text-align: center;
  background-color: #c0f;
  cursor: ${props => (props.disabled ? "none" : "col-resize")};

  &:focus {
    outline: 0;
  }
`;
const Thumb = props => <StyledThumb {...props} />;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  line-height: 40px;
  text-align: center;
  overflow: hidden;
  color: black;
  background: ${props => (props.index % 2 === 1 ? "#dc8efb" : "transparent")};
`;

const Track = props => {
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
          {!isMouseIn && <p style={{ margin: 0 }}>{start + " - " + end}</p>}
          {props.handleDelete && isMouseIn && (
            <button onClick={() => props.handleDelete(start, end)}>
              Delete
            </button>
          )}
        </React.Fragment>
      )}
    </StyledTrack>
  );
};

// const RenderRegions = ({ regions, handleDelete }) => {
//   const formattedRegions = [];
//   let i = 0;
//   while (i < regions.length) {
//     formattedRegions.push([regions[i], regions[i + 1]]);
//     i = i + 2;
//   }

//   return formattedRegions.map((r, i) => (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         borderBottom: "1px solid #bfbbbb"
//       }}
//       key={r[0]}
//     >
//       <p>
//         {i + 1}) Start: {r[0]} End: {r[1]}
//       </p>
//       <button onClick={() => handleDelete(r[0], r[1])}>Delete</button>
//     </div>
//   ));
// };

const StyledSlider = styled(ReactSlider)`
  width: 500px;
  height: 40px;
  background: #f4cfff;
  border: 1px solid #c0f;
  border-radius: 2px;
  position: absolute !important;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

function RcSlider(props) {
  const [regions, setRegions] = useState([20, 50]);
  const [addedRegions, setAddRegions] = useState([0, 10]);
  const [showModal, setModal] = useState(false);
  // const [start, setStart] = useState(0);
  // const [end, setEnd] = useState(10);

  function handleDelete(start, end) {
    const newRegions = regions.filter(r => r !== start && r !== end);
    setRegions(newRegions);
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

    setRegions(_.flattenDeep(mergedArray));
    setAddRegions([0, 10]);
  }

  return (
    <div
      style={{
        margin: "4rem",
        width: "570px"
      }}
    >
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
          pearling
          min={0}
          max={100}
          step={0.1}
          minDistance={0.1}
          value={addedRegions}
          renderTrack={(props, state) => (
            <Track key={uuidv4()} {...props} {...state} />
          )}
          renderThumb={Thumb}
          onChange={val => {
            setAddRegions([...val]);
          }}
        />
      )}

      {regions.length > 1 && (
        <StyledSlider
          pearling
          min={0}
          max={100}
          step={0.1}
          minDistance={0.1}
          value={regions}
          disabled={showModal}
          snapDragDisabled
          renderTrack={(props, state) => (
            <Track
              {...props}
              key={uuidv4()}
              value={state.value}
              index={state.index}
              handleDelete={handleDelete}
            />
          )}
          renderThumb={Thumb}
          onChange={val => {
            setRegions([...val]);
          }}
        />
      )}

      <AddButton
        showModal={showModal}
        onClick={() => {
          if (showModal) {
            handleAdd();
          }
          setModal(status => !status);
        }}
      >
        <svg
          height="40px"
          viewBox="0 0 512 512"
          width="40px"
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
      </AddButton>

      {/* {false && showModal && (
        <div
          style={{
            width: "250px",
            height: "200px",
            overflowY: "scroll",
            boxShadow: "1px 2px 10px 4px #e6e4e4",
            borderRadius: "5px",
            textAlign: "center",
            padding: "10px",
            position: "absolute",
            left: "600px"
          }}
        >
          <RenderRegions regions={regions} handleDelete={handleDelete} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: "10px"
            }}
          >
            <div>
              <label>Start</label>
              <input
                type="Number"
                style={{
                  width: "40px",
                  height: "20px",
                  margin: "0 7px",
                  borderRadius: "4px",
                  border: "1px solid #bfbbbb"
                }}
                value={start}
                min={0}
                max={99.9}
                step={0.1}
                onChange={e => setStart(Number(e.target.value))}
              />
            </div>

            <div>
              <label>End</label>
              <input
                type="Number"
                style={{
                  width: "40px",
                  height: "20px",
                  margin: "0 7px",
                  borderRadius: "4px",
                  border: "1px solid #bfbbbb"
                }}
                value={end}
                min={0.1}
                max={100}
                step={0.1}
                onChange={e => setEnd(Number(e.target.value))}
              />
            </div>

            <button
              style={{ background: "transparent", borderRadius: "4px" }}
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default RcSlider;
