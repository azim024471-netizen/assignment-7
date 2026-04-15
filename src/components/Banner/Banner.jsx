import { Plus } from 'lucide-react';
import React from 'react';
import SummaryCard from './SummaryCard';



const Banner = () => {
    const statCards = [
        { value: '10', label: 'Total Friends' },
        { value: '3', label: 'On Track' },
        { value: '6', label: 'Need Attention' },
        { value: '12', label: 'Interactions This Month' },
    ];
    return (
        <div className='container mx-auto  pt-20'>
            <div className='text-center  '>
                <div className=' space-y-4 mb-8'>
                    <h2 className='font-bold text-5xl'>Friends to keep close in your life</h2>
                    <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.</p>
                </div>
                <button className='bg-green-900 text-white font-semibold py-3.5 px-5 rounded-sm mb-10  flex items-center mx-auto'>
                    <Plus size={18}></Plus> Add a Friend</button>
            </div>

            <div className=' w-full grid grid-cols-2 md:grid-cols-4 gap-6 mb-20'>
                {
                    statCards.map((card, index)=> <SummaryCard key={index} card={card}></SummaryCard> )
                    
                }

            </div>
        </div>
    );
};

export default Banner;