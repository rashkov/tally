import React from "react";

function SortableMedalHeader(props) {
  let icon;
  if (props.medalType === "gold") {
    icon = (
      <div className="block width-20px height-20px border-radius-20px background-color-fee101" />
    );
  } else if (props.medalType === "silver") {
    icon = (
      <div className="block width-20px height-20px border-radius-20px background-color-a7a7ad" />
    );
  } else if (props.medalType === "bronze") {
    icon = (
      <div className="block width-20px height-20px border-radius-20px background-color-824a02" />
    );
  } else {
    icon = (
      <div className="color-565656 font-weight-normal font-size-12px">
        TOTAL
      </div>
    );
  }

  let sortStyle;
  if (props.sortMedal === props.medalType) {
    if (props.sortDesc) {
      sortStyle = "sort-desc";
    } else {
      sortStyle = "sort-asc";
    }
  }

  return (
    <th
      className={sortStyle}
      onClick={evt => {
        props.handleSort(props.medalType);
      }}
    >
      {icon}
    </th>
  );
}

export default SortableMedalHeader;
