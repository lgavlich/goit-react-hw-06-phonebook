import types from "./types";
import { v4 as uuidv4 } from "uuid";

export const addContact = (data) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export const deleteContact = (listId) => ({
  type: types.DELETE_CONTACT,
  payload: listId,
});
