import React from 'react';

const SummaryCard = ({card}) => {
    const {value, label} = card;
    return (
        <div className='p-8 space-y-2  w-full h-full mx-auto flex flex-col items-center justify-center rounded-lg text-center shadow-sm border border-gray-100 hover:shadow-lg'>
            <p className='font-semibold text-4xl text-green-950'>{value}</p>
            <p className='text-xl text-gray-600'>{label}</p>
        </div>
    );
};

export default SummaryCard;

{/* <div 
              key={index} 
              className="bg-white    flex flex-col items-center justify-center 
              "
            ></div> */}