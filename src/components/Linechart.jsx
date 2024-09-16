import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip
);

export default function Linechart() {
  const options = {};
  const date = {
    labels: [
        'M',
        'T',
        'W',
        'TH',
        'F',
        'S',
        'SU'
    ],
    options:{maintainAspectRatio: false},
    datasets: [{
        label: 'Steps 1',
        data: [300,400,600,400,200,300],
        borderColor: 'blue',
        
    },

    
   ]



  };




  return (
    <div>
      <Line options={""} data={date} />
    </div>
  );
}
