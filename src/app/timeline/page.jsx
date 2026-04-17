'use client';

import React, { useContext, useState } from 'react';
import { InteractionContext } from '@/context/interactionsContext';
import MeetedFriend from './MeetedFriend';

const TimelinePage = () => {

    const contextData = useContext(InteractionContext);
    const { interActions } = contextData;

    const [filterType, setFilterType] = useState('All')

    const filteredInteractions = interActions.filter((item) => {
        if (filterType === 'All') return true;

        return item.connet === filterType;
    });

    return (
        <div className='container mx-auto py-20 space-y-6'>
            <h1 className='text-5xl font-bold'>Timeline </h1>
            <div className="mb-6">

                <select defaultValue="Filter Timeline" className="select"
                    onChange={(e) => setFilterType(e.target.value)}>

                    <option value="All">Filter Timeline </option>
                    <option>Call</option>
                    <option>Text</option>
                    <option>Video</option>
                </select>
            </div>
   {
                filteredInteractions.length > 0 ? (
              filteredInteractions.map((friend, index) => (
                        <MeetedFriend key={index} friend={friend}></MeetedFriend>
                    ))
                ) 
                : 
                 (
             <div className="flex flex-col items-center justify-center py-20 bg-green-50 rounded-xl shadow-xl
              border-gray-200 space-y-5">          
            <h3 className="text-xl font-semibold text-gray-700">No History Found</h3>
         <p className="text-gray-500 mt-2">You havenot had any  interactions yet.</p>
              </div>
               )
   }
        </div>
    );
};

export default TimelinePage;



