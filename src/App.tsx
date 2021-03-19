import React from 'react';
import { Header, InfoBox, Map } from './components';
import { Country, CountryData } from './types';
import { getCountryData, getData } from './data';
import './App.css';
import { Card, CardContent } from '@material-ui/core';

function App() {
  const [countries, setCountries] = React.useState<Country[] | undefined>([]);
  const [country, setCountry] = React.useState('worldwide');
  const [countryInfo, setCountryInfo] = React.useState<
    CountryData | undefined
  >();

  // fetching data
  React.useEffect(() => {
    getCountryData(setCountries);
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
          {console.log(countryInfo)}
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
            <h3>Live Cases by Country</h3>
            <h3>Worldwide new cases</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
