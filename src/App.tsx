import React from 'react';
import { Header, InfoBox } from './components';
import { Country, CountryData } from './types';
import './App.css';

function App() {
  const [countries, setCountries] = React.useState<Country[] | undefined>([]);
  const [country, setCountry] = React.useState('worldwide');

  // fetching data
  React.useEffect(() => {
    const getCountryData = async () => {
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
    getCountryData();
  }, []);

  return (
    <div className='App'>
      <Header countries={countries} country={country} setCountry={setCountry} />
      <div className='infoboxes'>
        <InfoBox title='Coronavirus cases' total={2000} cases={2000} />
        <InfoBox title='Recovered' total={2000} cases={2000} />
        <InfoBox title='Deaths' total={2000} cases={2000} />
      </div>
    </div>
  );
}

export default App;
