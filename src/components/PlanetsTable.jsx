import React, { useContext, useEffect, useState } from 'react';
import PLANETS_ENDPOINT from '../planetsEndpoint';

function PlanetsTable() {
  const [planetsList, setPlanetsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectFilter, setSelectFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleQueryFilter = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const handleSelectFilters = (value, filter) => {
    if (filter === 'select') {
      setSelectFilter(value);
    }
    if (filter === 'comparison') {
      setComparisonFilter(value);
    }
    if (filter === 'number') {
      setNumberFilter(+value);
    }
  };

  const handleClickFilter = () => {
    setIsFiltered(true);
  };

  useEffect(() => {
    const handlePlanetsSearch = async () => {

      const { results } = await fetch(PLANETS_ENDPOINT)
        .then((response) => response.json());
      setPlanetsList(results);
    };
    handlePlanetsSearch();
  }, []);

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <th>Planeta</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
          {filteredPlanetsList?.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>))}
        </tbody>
      </table>
    </section>
  );
}

export default PlanetsTable;