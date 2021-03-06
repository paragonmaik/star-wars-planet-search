import React, { useContext, useEffect } from 'react';
import HeaderFilter from '../components/HeaderFilter';
import PlanetsTable from '../components/PlanetsTable';
import Context from '../context/';
import searchPlanets from '../services/api';

function Home() {
  const { setPlanetsList } = useContext(Context);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await searchPlanets();
      setPlanetsList(planets);
    };
    getPlanets();
  }, [setPlanetsList]);

  return (
    <>
    <section className="content-container">
      <div className="header-container">
        <HeaderFilter />
      </div>
      <div className="table-container">
        <PlanetsTable />
      </div>
    </section>
    </>
  );
}

export default Home;
