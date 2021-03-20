import React from 'react';
import { Header, InfoBox, LineGraph, Map, Table } from './components';
import { Country, CountryData } from './types';
import { getCountryData, getData } from './data';
import './App.css';
import { Card, CardContent } from '@material-ui/core';
import { table as dData } from './data/defaultTable';
import { sortData } from './utils';

function App() {
  const [countries, setCountries] = React.useState<Country[] | undefined>([]);
  const [country, setCountry] = React.useState('worldwide');
  const [countryInfo, setCountryInfo] = React.useState<
    CountryData | undefined
  >();
  const [tableData, setTableData] = React.useState<CountryData[]>([dData]);

  React.useEffect(() => {
    const getAll = async () => {
      const data = await getData('https://disease.sh/v3/covid-19/all');
      const tableD = await getData('https://disease.sh/v3/covid-19/countries');
      const sortedDataD = sortData(tableD);
      setCountryInfo(data);
      setTableData(sortedDataD);
      getCountryData(setCountries);
    };
    getAll();
  }, []);

  return (
    <div className='app'>
      <div className='left'>
        <Header
          countries={countries}
          country={country}
          setCountry={setCountry}
          countryInfo={countryInfo}
          setCountryInfo={setCountryInfo}
          getData={getData}
        />
        <div className='infoboxes'>
          <InfoBox
            title='Coronavirus cases'
            total={countryInfo?.cases}
            cases={countryInfo?.todayCases}
          />
          <InfoBox
            title='Recovered'
            total={countryInfo?.recovered}
            cases={countryInfo?.todayRecovered}
          />
          <InfoBox
            title='Deaths'
            total={countryInfo?.deaths}
            cases={countryInfo?.todayDeaths}
          />
        </div>
        <Map />
      </div>
      <div className='right'>
        <Card>
          <CardContent>
            <h3>Total Cases by Country</h3>
            <Table countries={tableData} />
            <h3>Worldwide new cases</h3>
            <LineGraph type='cases' />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
