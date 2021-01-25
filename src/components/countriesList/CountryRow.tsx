import React, { FunctionComponent, useRef, useLayoutEffect } from 'react';

import { CountryRowProps } from './constants/types';

const CountryRow: FunctionComponent<CountryRowProps> = ({
  capital,
  name,
  alpha2Code,
  observer,
}) => {
  const rowElem = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    // using layoutEffect instead of useEffect to insure a.) the ref is filled and b.) no poor UI side effects since intersectionObserver is modifying the DOM
    // https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
    if (rowElem && rowElem.current && observer) {
      observer.observe(rowElem.current);
    }
  }, []);
  return (
    <div className="countriesList_Row">
      <p>{name}</p>
      <p>{capital}</p>
      <p>
        <img
          ref={rowElem}
          // we don't want to populate all the images at once. Let's lazyload them!
          data-src={`https://www.countryflags.io/${alpha2Code}/flat/64.png`}
        />
      </p>
    </div>
  );
};

export default CountryRow;
