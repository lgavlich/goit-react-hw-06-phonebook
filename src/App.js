import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container/Container";
import Input from "./components/ContactList/ContactList";
import PhonebookList from "./components/PhonebookList/PhonebookList";
import useLocalStorage from "./hooks/localStorage";
//import { useState } from "react";
//import Filter from "./components/Filter/Filter";

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  //const [filter, setFilter] = useState("");
  console.log(contacts);

  const formSubmit = (data) => {
    console.log(data);
    const added = contacts.some((contact) => contact.name === data.name);
    if (added) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const contactData = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    setContacts((prevState) => [...prevState, contactData]);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Input onFormSubmit={formSubmit} />
      <PhonebookList
        //contacts={getVisibleContacts()}
        title="Contacts"
        //onDeleteList={deleteList}
      />
    </Container>
  );
}
//const deleteList = (listId) => {
//  setContacts((state) => state.filter((contact) => contact.id !== listId));
//};

//const changeFilter = (event) => {
//  setFilter(event.currentTarget.value);
//};

//const getVisibleContacts = () => {
//  const normalizedFilter = filter.toLowerCase();

//  return contacts.filter((contact) =>
//    contact.name.toLowerCase().includes(normalizedFilter)
//  );
//};
