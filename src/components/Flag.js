import React from "react";

const FLAG_ORDER = [
  "AUT",
  "BLR",
  "CAN",
  "CHN",
  "FRA",
  "GER",
  "ITA",
  "NED",
  "NOR",
  "RUS",
  "SUI",
  "SWE",
  "USA"
];

function Flag(props) {
  let flag_index = FLAG_ORDER.indexOf(props.country);
  let flag_url =
    "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/flags.png";

  // Sprite sheet is 28x221;
  // 221px height / 13 flags = 17px of height per flag
  let FLAG_WIDTH = 28,
    FLAG_HEIGHT = 17;
  let flag_style = {
    display: "inline-block",
    width: `${FLAG_WIDTH}px`,
    height: `${FLAG_HEIGHT}px`,
    background: `url(${flag_url}) 0px -${flag_index * FLAG_HEIGHT}px`,
    verticalAlign: "middle"
  };
  return <div style={flag_style} />;
}

export default Flag;
