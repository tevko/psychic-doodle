import React, { useEffect, useState, useRef } from 'react';

import './styles/countriesList.scss';
import { CountriesInterface } from './constants/interfaces';
import getCountries from './services/getCountries';
import useIntersectionObserver from './utilities/useIntersectionOberver';
import CountryRow from './CountryRow';
import LoadingSpinner from './LoadingSpinner';

// tells component what action to perform when an image comes into view
const isIntersectingCallback = (entry) => {
  entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
};

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
    const imgObserver = useIntersectionObserver({
      isIntersectingCallback,
      root: countriesContainer.current,
      unObserveAfterIntersect: true,
    });
    setObserver(imgObserver);
    loadAndStoreCountries();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="countriesList" ref={countriesContainer}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        countries.map((country) => (
          <CountryRow
            key={country.alpha2Code}
            capital={country.capital}
            name={country.name}
            alpha2Code={country.alpha2Code}
            observer={observer}
          />
        ))
      )}
    </div>
  );
};

export default CountriesList;
