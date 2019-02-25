import React, { useState, useEffect } from 'react';
import './App.css';
import Flag from './flag';

function App() {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const COUNTRIES_URL = "https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json";
        fetch(COUNTRIES_URL).then(function(response) {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        }).then(function(countries_data) {
            setCountries(countries_data);
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
      return;
    }, []);
    return (
        <div className="App">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Gold</th>
                  <th>Silver</th>
                  <th>Bronze</th>
                </tr>
              </thead>
              <tbody>
              {countries.map((country)=>{
                  return (
                  <tr key={country.code}>
                    <td><Flag country={country.code} /></td>
                    <td>{country.gold}</td>
                    <td>{country.silver}</td>
                    <td>{country.bronze}</td>
                  </tr>
                  )
              })}
              </tbody>
            </table>
        </div>
    );
}

export default App;
