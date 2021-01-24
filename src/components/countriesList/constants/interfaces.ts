export interface CountryInterface {
  // The endpoint provides more properties, but for now, we're only defining the ones we need explicitly, and can define more as needed (feature iteration)
  name: string;
  capital: string;
  alpha2Code: string;
}

export interface CountriesInterface extends Array<CountryInterface> {}
