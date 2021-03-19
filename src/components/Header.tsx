import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { Country, CountryData } from './../types';

type HeaderProps = {
  countries: Country[] | undefined;
  country: string;
  setCountry: Function;
  countryInfo: CountryData | undefined;
  setCountryInfo: Function;
  getData: Function;
};

export const Header = (props: HeaderProps) => {
  const onCountryChange = async (e: any) => {
    const countryCode = e.target.value;
    props.setCountry(countryCode);

    // Call the api
    const url =
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    const data = await props.getData(url);
    props.setCountryInfo(data);
  };
  return (
    <div className='header'>
      <h1>COVID-19 Tracker</h1>

      <FormControl className='dropdown'>
        <Select
          variant='outlined'
          onChange={onCountryChange}
          value={props.country}
        >
          <MenuItem value='worldwide'>Worldwide</MenuItem>
          {props.countries!.map((country) => (
            <MenuItem key={country.name} value={country.value}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
