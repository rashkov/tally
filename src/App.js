import React from "react";
import "./styles/App.css";
import "./styles/Reboot.css";
import Flag from "./components/Flag";
import MedalsTableHead from "./components/MedalsTableHead";
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
  return (
    <div className="app">
      <div className="font-size-18px">MEDAL COUNT</div>
      <table className="medals-table">
        {medalsTableHead}
        <tbody>
          {countries.slice(0, 10).map((country, index) => {
            return (
              <tr key={country.code}>
                <td className="flag-column">
                  <span className="inline-block width-30px text-align-right">
                    {index + 1}
                  </span>
                  <span>
                    <Flag country={country.code} />
                  </span>
                  <span className="country-code">{country.code}</span>
                </td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td className="font-weight-600 color-565656">
                  {country.total}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
