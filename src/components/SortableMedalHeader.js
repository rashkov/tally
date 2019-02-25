import React from "react";

function SortableMedalHeader(props) {
  return (
    <th
      onClick={evt => {
        props.handleSort(props.medalType);
      }}
    >
      {props.medalType}
    </th>
  );
}

export default SortableMedalHeader;
