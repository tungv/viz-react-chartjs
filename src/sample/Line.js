import React from 'react';
import { Bar } from 'react-chartjs-2';

const SampleBarChart = ({ chartData, chartOptions }) => (
  <Bar
    data={chartData}
    options={chartOptions}
    width="600"
    height="250"
  />
)

export default SampleBarChart;
