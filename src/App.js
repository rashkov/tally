import React, { useState, useEffect } from "react";
import "./App.css";
import Flag from "./components/Flag";
import SortableMedalHeader from "./components/SortableMedalHeader";
import sortBy from "lodash/sortBy";

function sortCountries(sort_medal, sort_direction, countries, setCountries) {
  let sorted_countries = sortBy(countries, [sort_medal, "gold", "silver"]);
  if (sort_direction === "desc") {
    sorted_countries = sorted_countries.reverse();
  }
  setCountries(sorted_countries);
}

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const COUNTRIES_URL =
      "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";
    fetch(COUNTRIES_URL)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(function(countries_data) {
        setCountries(countries_data);
      })
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
    return;
  }, []);

  const [sort_medal, setSortMedal] = useState("gold");
  const [sort_desc, setSortDesc] = useState(true);
  useEffect(() => {
    let sort_direction;
    if (sort_desc) {
      sort_direction = "desc";
    } else {
      sort_direction = "asc";
    }
    sortCountries(sort_medal, sort_direction, countries, setCountries);
  }, [sort_desc, sort_medal]);

  function handleSort(medalType) {
    if (sort_medal === medalType) {
      setSortDesc(!sort_desc);
    } else {
      setSortDesc(true);
      setSortMedal(medalType);
    }
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <SortableMedalHeader medalType="gold" handleSort={handleSort} />
            <SortableMedalHeader medalType="silver" handleSort={handleSort} />
            <SortableMedalHeader medalType="bronze" handleSort={handleSort} />
          </tr>
        </thead>
        <tbody>
          {countries.slice(0, 10).map(country => {
            return (
              <tr key={country.code}>
                <td>
                  <Flag country={country.code} />
                </td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
