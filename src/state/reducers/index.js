import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import testReducer from "./testReducer";

const reducers = combineReducers({
    // key (state): value (reducer for the state)
    search: searchReducer,
    test: testReducer
});

export default reducers;