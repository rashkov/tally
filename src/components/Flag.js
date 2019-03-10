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
  let FLAGURL = "/flags.png";

  // Sprite sheet is 28x221;
  // 221px height / 13 flags = 17px of height per flag
  let FLAGWIDTH = 28,
    FLAGHEIGHT = 17,
    flagStyle = {
      width: `${FLAGWIDTH}px`,
      height: `${FLAGHEIGHT}px`,
      background: `url(${FLAGURL}) 0px -${flagIndex * FLAGHEIGHT}px`
    };

  return (
    <div className="inline-block vertical-align-middle" style={flagStyle} />
  );
}

export default Flag;
