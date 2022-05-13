import { combineReducers } from "redux";
import cardQueryReducer from "./cardQueryReducer";
import cardCollectionReducer from './cardCollectionReducer';

const rootReducer = combineReducers({
    cardQueryReducer,
    cardCollectionReducer,
});

export default rootReducer;
