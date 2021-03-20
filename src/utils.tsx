import { Historical } from './types';

export const sortData = (data: any) => {
  return [...data].sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const buildChartData = (
  data: Historical,
  casesType: 'cases' | 'deaths' | 'recovered'
) => {
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
