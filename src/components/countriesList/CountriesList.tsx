import React, { useEffect, useState, useRef } from 'react';

import './styles/countriesList.scss';
import { CountriesInterface } from './constants/interfaces';
import getCountries from './services/getCountries';
import useIntersectionObserver from './utilities/useIntersectionOberver';
import CountryRow from './CountryRow';
import LoadingSpinner from './LoadingSpinner';

// tells component what action to perform when an image comes into view
const isIntersectingCallback = (entry: IntersectionObserverEntry) => {
  const target = entry.target;
  const dataSrc = target.getAttribute('data-src');
  if (dataSrc) {
    target.setAttribute('src', dataSrc);
  }
};

const CountriesList = () => {
  const countriesContainer = useRef<HTMLUListElement | null>(null);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
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
    if (countriesContainer && countriesContainer.current) {
      const imgObserver = useIntersectionObserver({
        isIntersectingCallback,
        root: countriesContainer.current,
        unObserveAfterIntersect: true,
      });
      setObserver(imgObserver);
    }
    loadAndStoreCountries();
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <ul className="countriesList" ref={countriesContainer}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        // for a larger list, https://www.npmjs.com/package/react-window would make sense here
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
    </ul>
  );
};

export default CountriesList;
