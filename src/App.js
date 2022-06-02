import React from 'react';
import Provider from './provider/';
import Home from './pages/Home';
import './styles/App.css';
import './styles/PlanetsTable.css';
import './styles/HeaderFilter.css';
import './styles/Home.css';

function App() {

  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
