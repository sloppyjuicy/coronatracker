import React from 'react';
import { Header, InfoBox, LineGraph, Map, Table } from './components';
import { CaseTypes, Country, CountryData } from './types';
import { getCountryData, getData } from './data';
import './App.css';
import { Card, CardContent } from '@material-ui/core';
import { table as dData } from './data/defaultTable';
import { convertUnixToDate, sortData } from './utils';
import { getCountryInfo } from './data/countries';
import { RouteComponentProps, useHistory } from 'react-router';

function App(props: RouteComponentProps) {
  const [defaultRun, setDefaultRun] = React.useState<boolean>(false);
  const history = useHistory();
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
      const allData = await getData('https://disease.sh/v3/covid-19/all');
      const tableData = await getData(
        'https://disease.sh/v3/covid-19/countries'
      );
      const sortedTableData = sortData(tableData);
      console.log('Setting all default data');
      setTableData(sortedTableData);
      setMapCountries(tableData);
      getCountryData(setCountries);
      setCountryInfo(allData);
    };
    if (!defaultRun) {
      getAll();
    }
    setDefaultRun(true);
  }, [defaultRun]);

  React.useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const country = params.get('country');
    if (country) {
      setCountry(country);
    }
  }, [props.location.search]);

  React.useEffect(() => {
    const updateData = async () => {
      // Map data
      const data = await getCountryInfo(country);
      setCountryInfo(data);
      console.log('Setting country specific data');
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      if (country === 'worldwide') {
        setMapZoom(3);
      } else {
        setMapZoom(4);
      }
    };
    if (defaultRun) {
      updateData();
    }
  }, [country, defaultRun]);

  React.useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const countryP = params.get('country');

    if (country && !countryP) {
      params.append('country', country);
      history.push({ search: params.toString() });
    }
    if (countryP) {
      setCountry(countryP);
    }

    console.log(params.toString());
  }, [country, history, props.location.search]);

  const onCountryChange = async (e: any) => {
    const code = e.target.value;
    setCountry(code);
    const params = new URLSearchParams(props.location.search);
    params.delete('country');
    params.append('country', code);
    history.push({ search: params.toString() });
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
