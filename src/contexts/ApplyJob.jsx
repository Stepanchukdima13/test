import React, { createContext, useReducer, useState } from 'react';
import { appliedJobReducer } from './Reducer';

export const applyJobContext = createContext()

function ApplyJob({ children }) {

    const [jobId, setJobId] = useState("")
    const initialState = {
        appliedJob : []
    }

    const [state, dispatch] = useReducer(appliedJobReducer, initialState);

    return (
        <applyJobContext.Provider value={{ jobId, setJobId, state, dispatch }}>
            {children}
        </applyJobContext.Provider>
    );
}

export default ApplyJob;