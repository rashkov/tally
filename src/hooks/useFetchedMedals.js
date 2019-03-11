import { useState, useEffect } from "react";

function countriesDataWithTotal(countriesData){
  return countriesData.map(country => {
      return {
        ...country,
        total: country.gold + country.silver + country.bronze
      };
  });
}

function useFetchedMedals() {
  const [countries, setCountries] = useState([]);
  const [networkError, setNetworkError] = useState(null);
  useEffect(() => {
    const DATAURL = "/medals.json";
    fetch(DATAURL)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(function(countriesData) {
        countriesData = countriesDataWithTotal(countriesData);
        setCountries(countriesData);
      })
      .catch(function(error) {
        setNetworkError(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
    return;
  }, []);

  return [countries, setCountries, networkError];
}

export default useFetchedMedals;
