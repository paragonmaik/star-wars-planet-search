import React, { useContext, useState } from 'react';
import Context from '../context/';
import logo from '../images/star_wars.png';

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
    <header className="filters-header">
      <img src={ logo } alt="Logo" />
      <label>
        Pesquisar por Nome
      <input
        data-testid="name-filter"
        type="text"
        onChange={ ({ target: { value } }) => handleFilterByName({ name: value }) }
      />
      </label>
      <form onSubmit={ handleFilterByNumeric }>
        <select
          data-testid="column-filter"
          id="column"
          onChange={ handleSelectInput }
        >
          {selectOptions.map((option) => <option key={ option }>{ option }</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          id="comparison"
          onChange={ handleSelectInput }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          id="value"
          type="number"
          defaultValue="0"
          onChange={ handleSelectInput }
        />
        <button
          type="submit"
          data-testid="button-filter"

        >
          Filtrar
        </button>
      </form>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ handleRemoveAllFilters }
      >
        Remover Filtros
      </button>
      <div className="selected-filter-container">
        {filters.filterByNumeric.length > 0 && (
          filters.filterByNumeric.map(({ column, comparison, value }) => (
            <div data-testid="filter" key={ column }>
              <p>{ column }</p>
              <p>{ comparison }</p>
              <p>{ value }</p>
              <button
                type="button"
                onClick={ () => handleRemoveSingleFilter(column) }
              >
                X
              </button>
            </div>))
        )}
      </div>
      <div className="sort-container">
        <form onSubmit={ handleSortPlanets }>
          <select
            data-testid="column-sort"
            id="column"
            onChange={ handleSelectSortInput }
          >
            {selectSortOptions
              .map((option) => <option key={ option }>{ option }</option>)}
          </select>
          <label>
            ASC
            <input
              onClick={ handleRadioInput }
              value="ASC"
              name="sort"
              data-testid="column-sort-input-asc"
              type="radio"
            />
        </label>
        <label>
          DESC
          <input
            onClick={ handleRadioInput }
            value="DESC"
            name="sort"
            data-testid="column-sort-input-desc"
            type="radio"
          />
        </label>
          <button
            type="submit"
            data-testid="column-sort-button"
          >
            Ordenar
          </button>
        </form>
      </div>
    </header>
  );
}

export default HeaderFilter;