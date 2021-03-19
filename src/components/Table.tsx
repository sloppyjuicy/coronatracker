import React from 'react';
import { CountryData } from '../types';

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
            <strong>{country.cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
