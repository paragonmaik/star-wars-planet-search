import React from 'react';

import Provider from './provider/';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <Provider>
      <PlanetsTable />
    </Provider>
  );
}

export default App;
