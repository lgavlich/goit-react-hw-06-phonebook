export const addContact = () => ({
  type: ADD_CONTACT,
  payload: { name, number, id },
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
