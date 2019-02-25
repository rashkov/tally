import React from "react";

function SortableMedalHeader(props) {
  let icon;
  if (props.medalType === "gold") {
    icon = (
      <div
        style={{
          display: "block",
          width: "20px",
          height: "20px",
          borderRadius: "20px",
          backgroundColor: "#fee101"
        }}
      />
    );
  } else if (props.medalType === "silver") {
    icon = (
      <div
        style={{
          display: "block",
          width: "20px",
          height: "20px",
          borderRadius: "20px",
          backgroundColor: "#a7a7ad"
        }}
      />
    );
  } else if (props.medalType === "bronze") {
    icon = (
      <div
        style={{
          display: "block",
          width: "20px",
          height: "20px",
          borderRadius: "20px",
          backgroundColor: "#824a02"
        }}
      />
    );
  } else {
    icon = (
      <div style={{ color: "#565656", fontWeight: "normal", fontSize: "12px" }}>
        TOTAL
      </div>
    );
  }

  let sort_style = {};
  if (props.sortMedal === props.medalType) {
    if (props.sortDesc) {
      sort_style = {
        borderBottom: "2px solid #999797"
      };
    } else {
      sort_style = {
        borderTop: "2px solid #999797"
      };
    }
  }

  return (
    <th
      style={sort_style}
      onClick={evt => {
        props.handleSort(props.medalType);
      }}
    >
      {icon}
    </th>
  );
}

export default SortableMedalHeader;
