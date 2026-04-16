'use client'
import React, { createContext, useState } from 'react';
 
export const InteractionContext = createContext()

const ContextProvider = ({children}) => {
     const [interActions, setInterActions] = useState([])
     
     const data ={
        interActions,
        setInterActions
     }

    

    return (
       <InteractionContext.Provider value={data}>
            {children}
        </InteractionContext.Provider>
    );
};

export default ContextProvider;