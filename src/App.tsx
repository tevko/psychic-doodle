import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';
import CountriesList from './components/countriesList/CountriesList';
import logo from './title_logo.png';

ReactDOM.render(
  <>
    <img width="575" height="307" className="logo" src={logo} />
    <CountriesList />
  </>,
  document.querySelector('main')
);
