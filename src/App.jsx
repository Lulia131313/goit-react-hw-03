import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import task from "./task.json";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if (saveContacts?.length) {
      return saveContacts;
    }
    return task;
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (newTask) => {
    setContacts((prevTask) => {
      return [...prevTask, newTask];
    });
  };
  const deleteContact = (taskId) => {
    setContacts((prevTask) => {
      return prevTask.filter((item) => item.id !== taskId);
    });
  };

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox value={inputValue} onInput={setInputValue} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
