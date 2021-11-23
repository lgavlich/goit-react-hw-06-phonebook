import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//const initialState = {
//  value: 21,
//};
const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
  //name: "",
  //number: "",
};
const reducer = (state = initialState, { type, payload }) => state;
const store = createStore(reducer, composeWithDevTools());

export default store;
