import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReducer from "./contacts-reducer";

//import { combineReducers } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";

const middlware = [...getDefaultMiddleware(), logger];
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middlware,
  devTools: process.env.NODE_ENV === "development",
});

//const rootReducer = combineReducers({
//  contacts: contactsReducer,
//});

//const store = createStore(rootReducer, composeWithDevTools());

//export default store;
