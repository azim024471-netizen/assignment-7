'use client'
import { InteractionContext } from '@/context/interactionsContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {
    const {interActions} = useContext(InteractionContext)

    const callArray =interActions.filter(item => item.connet === 'Call');
    const textArray =interActions.filter(item => item.connet === 'Text')
    const videArray =interActions.filter(item => item.connet === 'Video')
 
    const callCount = callArray.length;
    const textCount = textArray.length;
    const videoCount = videArray.length;

     
    const data = [
  { name: 'Text', value: textCount, fill: 'purple' },
  { name: 'Call', value: callCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: 'green' },
  
];
    return (
        <div className='container mx-auto p-10 bg-white '>

              <h1 className='text-5xl   mb-8 '> This is stats page</h1>

              <div className='shadow-sm bg-green-50 p-7 rounded-xs'>

                <h4 className='text-3xl font-medium text-green-900'>By Interaction Type</h4>
                <PieChart style={{ margin:'auto', width: '100%', maxWidth: '500px',
                     maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        fill="#8884d8"
       
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend iconType="circle"></Legend>
      <Tooltip></Tooltip>
    </PieChart>
             
              </div>   
              
        </div>
    );
};

export default StatsPage;