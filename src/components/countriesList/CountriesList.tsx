import React, { useEffect, useState, useRef } from 'react';

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
  const countriesContainer = useRef(null);
  const [observer, setObserver] = useState({});
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
  useEffect(() => {
    // create intersection observer for icon loading
    const imgObeserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute(
              'src',
              entry.target.getAttribute('data-src')
            );
            imgObeserver.unobserve(entry.target);
          }
        });
      },
      {
        root: countriesContainer.current,
      }
    );
    setObserver(imgObeserver);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="countriesList" ref={countriesContainer}>
      {isLoading && observer
        ? LoadingSpinner
        : countries.map((country) => (
            <CountryRow
              key={country.alpha2Code}
              capital={country.capital}
              name={country.name}
              alpha2Code={country.alpha2Code}
              observer={observer}
            />
          ))}
    </div>
  );
};

export default CountriesList;
