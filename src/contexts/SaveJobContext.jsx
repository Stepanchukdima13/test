import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

export const saveContext = createContext()

function SaveJobContext({ children }) {

    const initialState = {
        savedJobs: []
    }
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <saveContext.Provider value={{ state, dispatch }}>
            {children}
        </saveContext.Provider>
    );
}

export default SaveJobContext;