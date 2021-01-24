import React, { useEffect, useState } from 'react';

import { CountriesInterface } from './constants/interfaces';
import getCountries from './services/getCountries';

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
    <>
      <h1>Hello</h1>
      {countries[0].name}
    </>
  );
};

export default CountriesList;
