import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/Reboot.css";
import Flag from "./components/Flag";
import SortableMedalHeader from "./components/SortableMedalHeader";
import sortBy from "lodash/sortBy";

function sortCountries(sortMedal, sortDirection, countries, setCountries) {
  let sortedCountries = sortBy(countries, [sortMedal, "gold", "silver"]);
  if (sortDirection === "desc") {
    sortedCountries = sortedCountries.reverse();
  }
  setCountries(sortedCountries);
}

function App() {
  const [countries, setCountries] = useState([]);
  const [networkError, setNetworkError] = useState(null);
  useEffect(() => {
    const DATAURL =
      "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";
    fetch(DATAURL)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(function(countriesData) {
        countriesData.forEach(country => {
          country.total = country.gold + country.silver + country.bronze;
        });
        setCountries(countriesData);
      })
      .catch(function(error) {
        setNetworkError(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
    return;
  }, []);

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

  if (networkError) {
    return <div>{networkError}</div>;
  }

  return (
    <div className="app">
      <div className="font-size-18px">MEDAL COUNT</div>
      <table className="medals-table">
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
