// 'use client'
import ContextProvider from '@/context/interactionsContext';
import React from 'react';

const Providers = ({children}) => {
    return (
        <div>
            <ContextProvider>
                {children}
            </ContextProvider>
        </div>
    );
};

export default Providers;