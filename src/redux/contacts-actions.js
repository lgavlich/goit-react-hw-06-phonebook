import { v4 as uuidv4 } from "uuid";
import types from "./contacts-types";

export const AddContact = (data) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export const DelContact = (id) => ({
  type: types.DELETE,
  payload: id,
});

//const changeFilter = (value) => ({});
//export default { AddContact, DelContact, changeFilter };
