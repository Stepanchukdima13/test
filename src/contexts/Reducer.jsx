import data from "../app/data.json"

export const Reducer = (state, action) => {
    switch (action.type) {
        case "add_to_save":
            return {
                ...state,
                savedJobs: [...state.savedJobs, action.payload]
            };

        case "remove_from_save":
            const filteredList = state.savedJobs.filter((job) => {
                return job.id != action.payload.id
            })
            return {
                ...state,
                savedJobs: [...filteredList]
            }
    }
}

export const appliedJobReducer = (state, action) => {
    switch (action.type) {
        case "apply_job":
            const job = data.find(job => job.id == action.payload);
            return {
                ...state,
                appliedJob: [...state.appliedJob, job]
            }
    }
}