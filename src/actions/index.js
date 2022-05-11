import axios from "axios";
import { getCardListFromName } from "../endpoints";

export const fetchCardListByName = (query) => async (dispatch, getState) => {
    if (query.length === 0) {
        dispatch({
            type: 'FETCH_CARD_LIST_REQUEST',
        });

        dispatch({
            type: 'CARD_LIST_CLEAR',
        });
    } else if (query.length < 3) {
        dispatch({
            type: 'CARD_LIST_CLEAR',
        });
    } else if (query.length >= 3) {
        dispatch({
            type: 'FETCH_CARD_LIST_REQUEST',
        });

        try {
            const { data } = await axios.get(getCardListFromName(query));

            dispatch({
                type: 'FETCH_CARD_LIST_SUCCESS',
                payload: data.data,
            })
        } catch (error) {
            dispatch({
                type: 'FETCH_CARD_LIST_FAILURE',
                error: {
                    errorMessage: error.message,
                    errorCode: error.response.status,
                }
            })
        }
    }
};
