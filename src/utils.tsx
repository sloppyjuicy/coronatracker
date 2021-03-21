import { CountryData, Historical, CaseTypes } from './types';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';

export const sortData = (data: CountryData[]) => {
  return data.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const buildChartData = (data: Historical, casesType: CaseTypes) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    multiplier: 500,
  },
  recovered: {
    hex: '#7dd71d',
    multiplier: 500,
  },
  deaths: {
    hex: '#fb4443',
    multiplier: 1700,
  },
};

export const showDataOnMap = (data: CountryData[], type: CaseTypes) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[type].hex,
        fillColor: casesTypeColors[type].hex,
      }}
      radius={Math.sqrt(country[type]) * casesTypeColors[type].multiplier}
    >
      <Popup>
        <div className='info-container'>
          <div
            className='info-flag'
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className='info-name'>{country.country}</div>
          <div className='info-confirmed'>
            Cases: {numeral(country.cases).format('0,0')}
          </div>
          <div className='info-recovered'>
            Recovered: {numeral(country.recovered).format('0,0')}
          </div>
          <div className='info-deaths'>
            Deaths: {numeral(country.deaths).format('0,0')}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

export const prettyPrintStat = (stat: number) => {
  return stat ? numeral(stat).format('0.0a') : '0';
};
