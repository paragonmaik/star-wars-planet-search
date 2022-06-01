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

  const handleSort = (contextObj) => {
    setFilters({ ...filters, order: contextObj });
  };

  const handleFilterByColumn = (contextObj) => {
    setFilters({ ...filters, filterByNumeric: [...filters.filterByNumeric, contextObj] });
  };

  const handleFilterByName = (contextObj) => {
    setFilters({ ...filters, filterByName: contextObj });
  };

  const handleRemoveAllFilters = () => {
    setSelectOptions(['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
    setFilters({ ...filters, filterByNumeric: [] });
  };

  const handleRemoveSingleFilter = (column) => {
    const newObj = filters.filterByNumeric
      .filter((filter) => filter.column !== column);
    const newSelectOptions = selectOptions;
    newSelectOptions.push(column);

    setFilters({ ...filters, filterByNumeric: newObj });
    setSelectOptions(newSelectOptions);
  };

  const contextValue = {
    planetsList,
    filters,
    selectOptions,
    handleRemoveAllFilters,
    handleFilterByColumn,
    handleFilterByName,
    handleRemoveSingleFilter,
    handleSort,
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
  children: PropTypes.object,
}.isRequired;

export default Provider;

// {
//     filterByNumericValues: [
//       {
//         column: 'population',
//         comparison: 'maior que',
//         value: '100000',
//       }
//     ]