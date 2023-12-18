import React, { useReducer } from 'react';
import { reducer } from '../../contexts/saveReducer';

function SavedJobs() {

    const initialState = []

    const [state, dispatch] = useReducer(initialState, reducer)

    return (
        <>

        </>
    );
}

export default SavedJobs;