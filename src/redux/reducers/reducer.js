const initialState = {
    email : null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_EMAIL":
            return {
                ...state,
                email: action.email
            }
        default:
            return state
    }
}
