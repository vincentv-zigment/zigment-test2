import { useState } from 'react';
import BarChartContainer from './BarChartContainer';

type Props = {}

export const CandidateData = [
    {
      id: 1,
      status: "a",
      candidates: 15,
    },
    {
      id: 2,
      status: "b",
      candidates: 25,
    },
    {
      id: 3,
      status: "c",
      candidates: 25,
    },
    {
      id: 4,
      status: "d",
      candidates: 5,
    },
    {
      id: 5,
      status: "e",
      candidates: 50,
    },
  ];

const jobs = [
    {
        id:1,
        name:'Project Manager'
    }, 
    {
        id: 2,
        name:'Frontend Developer'
    }, 
    {
        id: 3,
        name:'Backend Developer'
    }, 
]
const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
const generateRandomData = () => {
    return labels.map(() => Math.floor(Math.random() * 50)  );
  };
  

export const data = {
    labels,
    datasets: [
      {
          label: 'a',
          data: generateRandomData(),
          borderColor: 'rgb(255, 101, 89)',
          backgroundColor: 'rgb(255, 101, 89)',
          // pointRadius: 3
      },
      {
          label: 'b',
          data: generateRandomData(),
          borderColor: '#E97C7C',
          backgroundColor: '#E97C7C',
      },
      {
          label: 'c',
          data: generateRandomData(),
          borderColor: '#85B8EB',
          backgroundColor: '#85B8EB',
      },
      {
          label: 'd',
          data: generateRandomData(),
          borderColor: '#87D0A5',
          backgroundColor: '#87D0A5',
      },
      {
          label: 'e',
          data: generateRandomData(),
          borderColor: '#FFE183',
          backgroundColor: '#FFE183',
      } 
    ],
  };

const BarChartCard = (props: Props) => {
    const [job, setJob] = useState(jobs[0])
    const [candidateData, setCandidateData] = useState({
        labels: CandidateData.map((data:any)=>data.status),
        datasets:[{
            label: '',
            data:CandidateData.map((data:any)=>data.candidates),
            barPercentage:0.2,
            backgroundColor:[
                'rgb(255, 101, 89)', 
                'rgb(255, 101, 89)',
                'rgb(255, 101, 89)',
                'rgb(255, 101, 89)', 
                'rgb(255, 101, 89)'
            ],
            borderRadius: '5',
        }]
      })
    
  return (
    <div className="w-full   rounded-md my-4">
     

        <div className='p-4'>
            <BarChartContainer chartData={candidateData}/>
        </div>

    </div>
  )
}

export default BarChartCard