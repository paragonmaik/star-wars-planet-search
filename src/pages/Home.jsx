import React, { useContext, useEffect } from 'react';
import HeaderFilter from '../components/HeaderFilter';
import PlanetsTable from '../components/PlanetsTable';
import MyContext from '../context/MyContext';
import searchPlanets from '../services/api';

function Home() {
  const { setPlanetsList } = useContext(MyContext);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await searchPlanets();
      setPlanetsList(planets);
    };
    getPlanets();
  }, [setPlanetsList]);

  return (
    <>
      <HeaderFilter />
      <PlanetsTable />
    </>
  );
}

export default Home;
