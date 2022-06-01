import React, { useContext, useState } from 'react';
import Context from '../context/';

function HeaderFilter() {
  const [filterByNumericObj, setFilterByNumericObj] = useState({
    column: 'population', comparison: 'maior que', value: 0,
  });

  const [selectSortOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const [orderObj, setOrderObj] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const { filters, handleRemoveAllFilters,
    handleRemoveSingleFilter, handleFilterByColumn, selectOptions,
    setSelectOptions, handleFilterByName, handleSort } = useContext(Context);

  const handleRadioInput = ({ target: { value } }) => {
    setOrderObj({ ...orderObj, sort: value });
  };

  const handleSelectSortInput = ({ target: { value } }) => {
    setOrderObj({ ...orderObj, column: value });
  };

  const handleSelectInput = ({ target: { id, value } }) => {
    setFilterByNumericObj({ ...filterByNumericObj, [id]: value });
  };

  const handleSortPlanets = (event) => {
    event.preventDefault();
    handleSort(orderObj);
  };

  const handleFilterByNumeric = (event) => {
    const { column } = filterByNumericObj;
    event.preventDefault();
    handleFilterByColumn(filterByNumericObj);
    const newSelectOptions = selectOptions.filter((option) => option !== column);
    setSelectOptions(newSelectOptions);
  };

  return (
    <header>
      
    </header>
  );
}

export default HeaderFilter;