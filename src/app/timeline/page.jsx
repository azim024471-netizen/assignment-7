'use client';

import React, { useContext } from 'react';
import { InteractionContext } from '@/context/interactionsContext';
import MeetedFriend from './MeetedFriend';

const TimelinePage = () => {

    const contextData = useContext(InteractionContext);

     const {interActions}  = contextData;

    // console.log('this is interaction', interActions,)

    //  console.log('this is set iohsf', setInterActions)



    return (
        <div className='container mx-auto py-20 space-y-6'>
            <h1 className='text-5xl font-bold'>Timeline </h1>
            <div className="mb-6">
                <select className="text-xl p-4 text-left text-gray-600 rounded-sm bg-white">
                    <option>Filter timeline</option>
                    <option>Meetup</option>
                    <option>Text</option>
                    <option>Video</option>
                </select>
            </div>

              {
              interActions.map((friend)=><MeetedFriend key={friend.id} friend={friend}></MeetedFriend>)
              }
        </div>
    );
};

export default TimelinePage;