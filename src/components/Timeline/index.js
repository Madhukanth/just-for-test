import React from 'react';
import uuid from 'uuid/v4';

import TimelineData from './timeline.json';

const timelineWidth = 800;
const columnsCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const colors = [
  'red',
  'blue',
  'green',
  'orange',
  'yellow',
  'lightblue',
  'lightgray',
  'cyan',
  'lightgreen',
  'pink'
];
const styles = {
  timelineContainer: {
    width: timelineWidth + 'px',
    border: '1px',
    height: '200px'
  },
  singleBlock: {
    width: '50px',
    height: '25px',
    background: 'blue',
    borderRadius: '3px'
  }
};

function getFillPercent(color, timeRegion, start, end) {
  let startPercent = 0;
  let endPercent = 0;
  timeRegion.map(region => {
    if (region[0] <= start && region[1] >= end) {
      startPercent = 0;
      endPercent = 100;
    } else {
      if (region[0] >= start && region[0] < end) {
        startPercent = (region[0] - start) * 100;
      }

      if (region[1] > start && region[1] <= end) {
        endPercent = (region[1] - start) * 100;
      }

      if (region[0] > start && region[0] < end && region[1] > end) {
        endPercent = 100;
      }
    }

    return 1;
  });

  if (startPercent || endPercent) {
    return `linear-gradient(to right,  white ${startPercent}%,${color} ${startPercent}%,${color} ${endPercent}%,white ${endPercent}%)`;
  } else {
    return 'white';
  }
}

function Block(props) {
  const background = getFillPercent(
    props.color,
    props.timeRegion,
    props.start,
    props.end
  );

  return (
    <div
      style={{
        border: `1px solid ${background === 'white' ? 'black' : props.color}`,
        width: '50px',
        height: '25px',
        borderRadius: '3px',
        background: background
      }}
    />
  );
}

function Headings() {
  return columnsCount.map(i => (
    <th key={uuid()}>
      <p>{i + ' - ' + (i + 1)}</p>
    </th>
  ));
}

function Blocks(props) {
  return (
    <table>
      <thead>
        <tr>
          <Headings />
        </tr>
      </thead>
      <tbody>
        {props.persons.map(person => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <tr key={uuid()}>
              {columnsCount.map(i => (
                <td key={uuid()}>
                  <Block
                    color={color}
                    timeRegion={TimelineData.timeline[person].timeregions}
                    start={i}
                    end={i + 1}
                  />
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Timeline() {
  return (
    <div>
      <p>Timeline</p>
      <div style={styles.timelineContainer}>
        <Blocks persons={Object.keys(TimelineData.timeline)} />
      </div>
    </div>
  );
}

export default Timeline;
