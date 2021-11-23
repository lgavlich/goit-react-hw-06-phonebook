import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//const initialState = {
//  value: 21,
//};
const initialState = {
  contacts
  name: "",
  number: "",
};
const reducer = (state = initialState, action) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
