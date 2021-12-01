import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const AddContact = createAction("contacts/addContact", (data) => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

export const DelContact = createAction("contacts/DelContact");
export const changeFilter = createAction("filter/change");

//export const DelContact = (id) => ({
//  type: types.DELETE,
//  payload: id,
//});

//const changeFilter = (value) => ({});
//export default { AddContact, DelContact, changeFilter };
