import { COUNTRIES_API_URL } from '../constants';
import { CountriesInterface } from '../constants/interfaces';

const getCountries = async () => {
  try {
    const resp = await fetch(COUNTRIES_API_URL);
    const json: CountriesInterface = await resp.json();
    return json;
  } catch (e) {
    return [
      {
        name: '',
        capital: '',
        alpha2Code: '',
      },
    ];
  }
};

export default getCountries;
