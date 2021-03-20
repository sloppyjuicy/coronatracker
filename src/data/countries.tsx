import { CountryData } from './../types';
import { buildChartData } from './../utils';

export const getCountryInfo = async (
  code: string,
  setCountryInfo: Function
) => {
  const url =
    code === 'worldwide'
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${code}`;
  const data = await getData(url);
  setCountryInfo(data);
};

export const getHistoricalData = async (
  days: number,
  setData: Function,
  type: 'cases' | 'deaths' | 'recovered'
) => {
  const url = `https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`;
  const data = await getData(url);
  const chartData = buildChartData(data, type);
  setData(chartData);
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
  const data = json.json();
  return data;
};
