import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { Country } from './../types';

type HeaderProps = {
  countries: Country[] | undefined;
  country: string;
  onCountryChange: any;
  lastUpdate: any;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className='header'>
      <h1>COVID-19 Tracker</h1>

      <h5 className='lastupdate'>Last update: {props.lastUpdate}</h5>

      <FormControl className='dropdown'>
        <Select
          variant='outlined'
          onChange={props.onCountryChange}
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
