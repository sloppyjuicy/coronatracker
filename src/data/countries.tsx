import { CountryData } from './../types';

export const getCountryData = async (setCountries: Function) => {
  await fetch('https://disease.sh/v3/covid-19/countries')
    .then((response) => response.json())
    .then((data: CountryData[]) => {
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      setCountries(countries);
    });
};

export const getData = async (url: string) => {
  const json = await fetch(url);
  const data = json.json();
  return data;
};
