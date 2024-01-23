import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto";
import { convertNumber } from '../../../Functions/convertNumber';
const LineChart = ({chartData,multiAxis,toggle,options}) => {
    console.log("prices",toggle)
    
  return (
    <Line data={chartData} options={options} />
  )
}

export default LineChart