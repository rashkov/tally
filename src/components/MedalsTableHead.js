import React from "react";
import SortableMedalHeader from "./SortableMedalHeader";

function MedalsTableHead(handleSort, sortMedal, sortDesc) {
  return (
    <thead>
      <tr>
        <th />
        <SortableMedalHeader
          medalType="gold"
          handleSort={handleSort}
          sortMedal={sortMedal}
          sortDesc={sortDesc}
        />
        <SortableMedalHeader
          medalType="silver"
          handleSort={handleSort}
          sortMedal={sortMedal}
          sortDesc={sortDesc}
        />
        <SortableMedalHeader
          medalType="bronze"
          handleSort={handleSort}
          sortMedal={sortMedal}
          sortDesc={sortDesc}
        />
        <SortableMedalHeader
          medalType="total"
          handleSort={handleSort}
          sortMedal={sortMedal}
          sortDesc={sortDesc}
        />
      </tr>
    </thead>
  );
}

export default MedalsTableHead;
