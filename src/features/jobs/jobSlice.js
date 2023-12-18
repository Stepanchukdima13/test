import { createSlice, current } from "@reduxjs/toolkit";
import data from "../../app/data.json"

const initialState = data

export const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        onFilter(state, action) {
            const { job, location } = action.payload
            console.log(location);
            const filteredJob = current(state).filter((job) => {
                return job.location.toLowerCase() == location.toLowerCase()
            })
            
        }
    }
})

export default jobSlice.reducer
export const selectAllJobs = (state) => state.jobs
export const {onFilter} = jobSlice.actions

