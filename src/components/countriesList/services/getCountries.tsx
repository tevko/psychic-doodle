import { COUNTRIES_API_URL } from '../constants';
import { CountriesInterface } from '../constants/interfaces';

const getCountries = async () => {
  try {
    const resp = await fetch(COUNTRIES_API_URL);
    const json: CountriesInterface = await resp.json();
    // we could do some typechecking here to insure the data is coming back in the way we expect it, and throw an error if it's wrong
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
