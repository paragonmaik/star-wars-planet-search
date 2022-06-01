import React, { useState, useEffect } from 'react';
import PLANETS_ENDPOINT from '../planetsEndpoint';

function PlanetsTable() {
  const [planetsList, setPlanetsList] = useState([]);

  const handlePlanetsSearch = async () => {
    const { results } = await fetch(PLANETS_ENDPOINT)
      .then((response) => response.json());
    setPlanetsList(results);
  };

  useEffect(() => {
    handlePlanetsSearch();
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
          <th>Planeta</th>
        </tr>
        {planetsList.map(({
          name,
          rotation_period, orbital_period, diameter, climate,
          gravity, terrain, surface_water, population, films,
          created, edited, url
      }) => (
          <tr key={ name }>
            <td>{name}</td>
            <td>{rotation_period}</td>
            <td>{orbital_period}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surface_water}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>))}
      </tbody>
    </table>
  );
}

export default PlanetsTable;