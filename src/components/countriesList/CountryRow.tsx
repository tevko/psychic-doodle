import React, { FunctionComponent, useRef, useEffect } from 'react';

import { CountryRowProps } from './constants/types';

const CountryRow: FunctionComponent<CountryRowProps> = ({
  capital,
  name,
  alpha2Code,
  observer,
}) => {
  const rowElem = useRef(null);
  useEffect(() => {
    observer.observe(rowElem.current);
  }, []);
  return (
    <div className="countriesList_Row">
      <p>{name}</p>
      <p>{capital}</p>
      <p>
        <img
          ref={rowElem}
          data-src={`https://www.countryflags.io/${alpha2Code}/flat/64.png`}
        />
      </p>
    </div>
  );
};

export default CountryRow;
