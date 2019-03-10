import React from "react";

const flagOrder = [
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
  let flagIndex = flagOrder.indexOf(props.country);
  let FLAGURL =
    "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/flags.png";

  // Sprite sheet is 28x221;
  // 221px height / 13 flags = 17px of height per flag
  let FLAGWIDTH = 28,
    FLAGHEIGHT = 17;
  let flagStyle = {
    display: "inline-block",
    width: `${FLAGWIDTH}px`,
    height: `${FLAGHEIGHT}px`,
    background: `url(${FLAGURL}) 0px -${flagIndex * FLAGHEIGHT}px`,
    verticalAlign: "middle"
  };
  return <div style={flagStyle} />;
}

export default Flag;
