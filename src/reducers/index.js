import { combineReducers } from "redux";
import cardQueryReducer from "./cardQueryReducer";

const rootReducer = combineReducers({
    cardQueryReducer,
});

export default rootReducer;
