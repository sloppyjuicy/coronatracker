import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { Country } from './../types';

type HeaderProps = {
  countries: Country[] | undefined;
  country: string;
  setCountry: Function;
};

export const Header = (props: HeaderProps) => {
  const onCountryChange = async (e: any) => {
    const countryCode = e.target.value;
    props.setCountry(countryCode);
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
