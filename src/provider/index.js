import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/';

function Provider({ children }) {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const contextValue = {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
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