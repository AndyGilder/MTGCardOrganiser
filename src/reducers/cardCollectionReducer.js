const initialState = {
    card: null,
    error: null,
}

// Used when adding cards to a collection - only shows cards added during the session and will disappear when refreshed
const cardCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARD_DETAILS':
            return {
                ...state,
                card: action.payload,
            }
        default:
            return state;
    }
}

export default cardCollectionReducer;
