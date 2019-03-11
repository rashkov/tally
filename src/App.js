import React from "react";
import "./styles/App.css";
import "./styles/Reboot.css";
import MedalsTableHead from "./components/MedalsTableHead";
import MedalsTableBody from "./components/MedalsTableBody";
import useFetchedMedals from "./hooks/useFetchedMedals";
import useSortableByCountry from "./hooks/useSortableByCountry";

function App() {
  let [countries, setCountries, networkError] = useFetchedMedals();

  let [sortMedal, sortDesc, handleSort] = useSortableByCountry(
    countries,
    setCountries
  );

  if (networkError) {
    return <div>{networkError}</div>;
  }

  let medalsTableHead = MedalsTableHead(handleSort, sortMedal, sortDesc);
  let medalsTableBody = MedalsTableBody(countries);
  return (
    <div className="app">
      <div className="font-size-18px">MEDAL COUNT</div>
      <table className="medals-table">
        {medalsTableHead}
        {medalsTableBody}
      </table>
    </div>
  );
}

export default App;
