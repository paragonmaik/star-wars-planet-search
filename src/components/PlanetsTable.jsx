import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/';

function PlanetsTable() {
  const { filters, planetsList } = useContext(Context);
  const [filteredPlanetsList, setFilteredPlanetsList] = useState([]);

  const handleSort = (a, b) => {
    const { order } = filters;
    const returnedSortNumber = 1;

    switch (order.column) {
    case 'name':
      return (a[order.column] > b[order.column] ? 1 : -returnedSortNumber);

    case 'orbital_period':
      return +a[order.column] < +b[order.column] ? 1 : -returnedSortNumber;

    case 'diameter':
      return +a[order.column] > +b[order.column] ? 1 : -returnedSortNumber;

    case 'population':
      return ((typeof +a[order.column] === typeof a[order.column])
    && (typeof +a[order.column] !== typeof a[order.column]))
    || (+b[order.column] - +a[order.column]);

    default:
      return true;
    }
  };

  useEffect(() => {
    const { filterByName, filterByNumeric } = filters;

    let planetsListPlaceHolder = planetsList?.filter(({ name }) => (name.toLowerCase())
      .includes(filterByName.name)).sort((a, b) => handleSort(a, b));

    filterByNumeric.forEach(({ column, comparison, value }) => {
      planetsListPlaceHolder = planetsListPlaceHolder.filter((planet) => {
        if (comparison === 'maior que') {
          return +planet[column] > +value;
        } if (comparison === 'menor que') {
          return +planet[column] < +value;
        } if (comparison === 'igual a') {
          return +planet[column] === +value;
        }
        return true;
      });
      setFilteredPlanetsList(planetsListPlaceHolder);
    });
    setFilteredPlanetsList(planetsListPlaceHolder);
  }, [filters, planetsList]);

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