import { CountryData } from './../types';

export const getCountryInfo = async (code: string) => {
  const url =
    code === 'worldwide'
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${code}`;

  const data = await getData(url);
  if (code === 'worldwide') {
    return {
      ...data,
      countryInfo: {
        lat: 34.80746,
        long: -40.4796,
      },
    };
  } else {
    return data;
  }
};

export const getHistoricalData = async (days: number) => {
  const url = `https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`;
  return await getData(url);
};

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
  return json.json();
};
