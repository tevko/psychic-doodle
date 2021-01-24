import React from 'react';

const LoadingSpinner = () => (
  // I literally stole this from codepen - https://codepen.io/siropkin/pen/ZEpwKVX
  <div className="countriesList_spinner">
    <div className="countriesList_spinner--inner --one"></div>
    <div className="countriesList_spinner--inner --two"></div>
    <div className="countriesList_spinner--inner --three"></div>
  </div>
);

export default LoadingSpinner;
