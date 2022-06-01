import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/';

function Provider({ children }) {
  const [selectOptions, setSelectOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const [planetsList, setPlanetsList] = useState();

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumeric: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const contextValue = {
     planetsList,
      filters,
      selectOptions,
      setFilters,
      setSelectOptions,
      setPlanetsList 
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;

// {
//     filterByNumericValues: [
//       {
//         column: 'population',
//         comparison: 'maior que',
//         value: '100000',
//       }
//     ]