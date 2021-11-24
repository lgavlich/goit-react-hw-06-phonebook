import actionTypes from "./types";

export const addContact = (name, number, id) => ({
  type: actionTypes.ADD_CONTACT,
  payload: { name, number, id },
});

export const deleteContact = (listId) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: listId,
});
