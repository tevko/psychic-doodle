import React, { FunctionComponent } from 'react';

import { CountryRowProps } from './constants/types';

const CountryRow: FunctionComponent<CountryRowProps> = ({
  capital,
  name,
  alpha2Code,
}) => {
  return (
    <div className="CountryRow">
      {capital}
      {name}
      {alpha2Code}
    </div>
  );
};

export default CountryRow;
