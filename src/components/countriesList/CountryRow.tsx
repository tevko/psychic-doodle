import React, { FunctionComponent } from 'react';

import { CountryRowProps } from './constants/types';

const CountryRow: FunctionComponent<CountryRowProps> = ({
  capital,
  name,
  alpha2Code,
}) => {
  return (
    <div className="countriesList_Row">
      <p>{name}</p>
      <p>{capital}</p>
      <p>
        <img
          data-src={`https://www.countryflags.io/${alpha2Code}/flat/64.png`}
          src=""
        />
      </p>
    </div>
  );
};

export default CountryRow;
