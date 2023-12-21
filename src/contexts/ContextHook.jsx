import React, { createContext, useState } from 'react';

export const searchContext = createContext()


function ContextHook({ children }) {

    const [job, setJob] = useState("")
    const [location, setLocation] = useState("")

    return (
        <searchContext.Provider value={{ job, setJob, location, setLocation }}>
                {children}
        </searchContext.Provider>
    );
}

export default ContextHook;