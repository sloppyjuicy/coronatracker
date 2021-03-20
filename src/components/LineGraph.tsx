import React from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import { getHistoricalData } from '../data/countries';

type LineGraphProps = {
  type: 'cases' | 'deaths' | 'recovered';
};

// https://disease.sh/v3/covid-19/historical/all?lastdays=120

const options: any = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (tooltipItem: any, data: any) {
        return numeral(tooltipItem.value).format('+0,0');
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value: any, index: any, values: any[]) {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};

export const LineGraph = (props: LineGraphProps) => {
  const [data, setData] = React.useState<any[]>();

  React.useEffect(() => {
    const fetchData = async () => {
      await getHistoricalData(120, setData, 'cases');
    };
    fetchData();
  }, []);
  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              backgroundColor: 'rgba(204, 16, 52, 0.5)',
              borderColor: '#CC1034',
              data: data,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};
