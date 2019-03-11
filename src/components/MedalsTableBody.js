import React from "react";
import Flag from "./Flag";

function MedalsTableBody(countries) {
  return (
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
            <td className="font-weight-600 color-565656">{country.total}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default MedalsTableBody;
