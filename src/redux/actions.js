//import types from "./types";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", (data) => {
  return {
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
});

export const dedeleteContact = createAction("contacts/deleteContact");

//export const addContact = (data) => ({
// type: types.ADD_CONTACT,
// payload: {
//   id: uuidv4(),
//   name: data.name,
//   number: data.number,
// },
//});

//export const deleteContact = (listId) => ({
//  type: types.DELETE_CONTACT,
//  payload: listId,
//});
