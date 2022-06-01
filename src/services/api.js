import PLANETS_ENDPOINT from '../planetsEndpoint';

const searchPlanets = async () => {
  const { results } = await fetch(PLANETS_ENDPOINT)
    .then((response) => response.json());
  delete results.residents;
  return results;
};

export default searchPlanets;
