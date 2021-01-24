import React, { useEffect, useState } from 'react';

import './styles/countriesList.scss';
import { CountriesInterface } from './constants/interfaces';
import getCountries from './services/getCountries';
import CountryRow from './CountryRow';

const LoadingSpinner = (
  // I literally stole this from codepen - https://codepen.io/siropkin/pen/ZEpwKVX
  <div className="countriesList_spinner">
    <div className="countriesList_spinner--inner --one"></div>
    <div className="countriesList_spinner--inner --two"></div>
    <div className="countriesList_spinner--inner --three"></div>
  </div>
);

const CountriesList = () => {
  const [isLoading, setLoading] = useState(true);
  const [countries, setCountries] = useState([
    { name: '', capital: '', alpha2Code: '' },
  ]);
  useEffect(() => {
    async function loadAndStoreCountries() {
      const data: CountriesInterface = await getCountries();
      setCountries(data);
      setLoading(false);
    }
    loadAndStoreCountries();
  }, []);
  return (
    <div className="countriesList">
      {isLoading
        ? LoadingSpinner
        : countries.map((country) => (
            <CountryRow
              key={country.alpha2Code}
              capital={country.capital}
              name={country.name}
              alpha2Code={country.alpha2Code}
            />
          ))}
    </div>
  );
};

export default CountriesList;
