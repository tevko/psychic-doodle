import { COUNTRIES_API_URL } from '../constants';

const getCountries = async () => {
  try {
    const resp = await fetch(COUNTRIES_API_URL);
    const json = await resp.json();
    return json;
  } catch (e) {
    return [];
  }
};

export default getCountries;
