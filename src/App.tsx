import React from 'react';
import { Header, InfoBox, LineGraph, Map, Table } from './components';
import { CaseTypes, Country, CountryData } from './types';
import { getCountryData, getData } from './data';
import './App.css';
import { Card, CardContent } from '@material-ui/core';
import { table as dData } from './data/defaultTable';
import { convertUnixToDate, sortData } from './utils';
import { getCountryInfo } from './data/countries';

function App() {
  const [casesType, setCasesType] = React.useState<CaseTypes>('cases');
  const [mapCenter, setMapCenter] = React.useState<any[]>([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = React.useState<number>(3);
  const [countries, setCountries] = React.useState<Country[] | undefined>([]);
  const [mapCountries, setMapCountries] = React.useState<
    CountryData[] | undefined
  >([]);
  const [country, setCountry] = React.useState<string>('worldwide');
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
      setMapCountries(tableD);
      getCountryData(setCountries);
    };
    getAll();
  }, []);

  const onCountryChange = async (e: any) => {
    const code = e.target.value;
    setCountry(code);
    const data = await getCountryInfo(code);
    setCountryInfo(data);
    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
    if (code === 'worldwide') {
      setMapZoom(3);
    } else {
      setMapZoom(4);
    }
  };

  return (
    <div className='app'>
      <div className='left'>
        <Header
          countries={countries}
          country={country}
          onCountryChange={onCountryChange}
          lastUpdate={convertUnixToDate(countryInfo?.updated)}
        />
        <div className='infoboxes'>
          <InfoBox
            isRed
            active={casesType === 'cases'}
            onClick={(e: any) => setCasesType('cases')}
            title='Cases'
            total={countryInfo?.cases}
            cases={countryInfo?.todayCases}
          />
          <InfoBox
            isRed={false}
            active={casesType === 'recovered'}
            onClick={(e: any) => setCasesType('recovered')}
            title='Recovered'
            total={countryInfo?.recovered}
            cases={countryInfo?.todayRecovered}
          />
          <InfoBox
            isRed
            active={casesType === 'deaths'}
            onClick={(e: any) => setCasesType('deaths')}
            title='Deaths'
            total={countryInfo?.deaths}
            cases={countryInfo?.todayDeaths}
          />
        </div>
        <Map
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
          type={casesType}
        />
      </div>
      <div className='right'>
        <Card>
          <CardContent>
            <h3>Total Cases by Country</h3>
            <Table countries={tableData} />
            <h3>Worldwide new {casesType}</h3>
            <LineGraph type={casesType} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
