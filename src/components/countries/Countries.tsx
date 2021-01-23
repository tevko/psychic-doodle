import React, { useEffect, useState } from 'react';

import getCountries from './services/getCountries';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries().then((countries) => {
      setCountries(countries);
    });
  }, []);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Countries;
