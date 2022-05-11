const initialState = {
    cardList: [],
    loading: false,
    error: null,
}

const cardQueryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CARD_LIST_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            }
        case 'FETCH_CARD_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                cardList: action.payload,
            }
        case 'FETCH_CARD_LIST_FAILURE':
            return {
                ...state,
                loading: false,
                error: {
                    errorMessage: action.error.errorMessage,
                    errorCode: action.error.errorCode,
                },
                cardList: [],
            }
        case 'CARD_LIST_CLEAR':
            return {
                ...state,
                loading: false,
                cardList: [],
            }
        default:
            return state;
    };
};

export default cardQueryReducer;
