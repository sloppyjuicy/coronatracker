import React from 'react';
import { CountryData } from '../types';
import numeral from 'numeral';

type TableProps = {
  countries: CountryData[];
};

export const Table = (props: TableProps) => {
  return (
    <div className='table'>
      {props.countries.map((country) => (
        <tr key={country.country}>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format('0,0')}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
