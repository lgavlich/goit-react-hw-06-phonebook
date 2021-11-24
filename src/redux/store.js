import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReduser from "./reducer";

//const initialState = {
//  value: 21,
//};
//const initialState = {
//contacts: {
//items: [],
// filter: "",
//},
//name: "",
//number: "",
//};

const rootReducer = combineReducers({
  contacts: contactsReduser,
});
//const reducer = (state = initialState, { type, payload }) => state;
const store = createStore(rootReducer, composeWithDevTools());

export default store;
