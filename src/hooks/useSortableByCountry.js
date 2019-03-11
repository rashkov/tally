import { useState, useEffect } from "react";
import sortBy from "lodash/sortBy";

function sortCountries(sortMedal, sortDirection, countries, setCountries) {
  let sortedCountries = sortBy(countries, [sortMedal, "gold", "silver"]);
  if (sortDirection === "desc") {
    sortedCountries = sortedCountries.reverse();
  }
  setCountries(sortedCountries);
}

function useSortableByCountry(countries, setCountries) {
  const [sortMedal, setSortMedal] = useState("gold");
  const [sortDesc, setSortDesc] = useState(true);
  useEffect(() => {
    let sortDirection;
    if (sortDesc) {
      sortDirection = "desc";
    } else {
      sortDirection = "asc";
    }
    sortCountries(sortMedal, sortDirection, countries, setCountries);
  }, [sortDesc, sortMedal, countries.length]);

  function handleSort(medalType) {
    if (sortMedal === medalType) {
      setSortDesc(!sortDesc);
    } else {
      setSortDesc(true);
      setSortMedal(medalType);
    }
  }

  return [sortMedal, sortDesc, handleSort];
}
export default useSortableByCountry;
