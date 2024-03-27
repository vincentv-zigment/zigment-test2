import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
    
    scales: {
        x: {
          grid: {
            display: false
          }
        },
         y: {
            grid: {
                color: 'rgb(226 232 240)',
            },
            border: {
                dash: [4,4],
            },
            ticks:{
              stepSize: 10
            }
       }
      },
      maintainAspectRatio: false
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(255, 101, 89)',
    },
   
  ],
};

export function VerticalChart() {
  return <Bar options={options} data={data}/>;
}
