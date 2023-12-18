export const reducer = (state, action) => {
    switch (action.type) {
        case "addToSave":
            return [
                ...state,
                action.payload
            ]
    }
}  