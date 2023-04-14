import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;




// const UsingUseState = () => {
//   let [count, setCount]  = useState(0) // 1
//   console.log("I loaded again")  // why it is loading twice
//   let a = 10; 
//   function increaseCount(){
//      console.log("I am getting accessed")
//       setCount(count+1) // count = 1
//       // setCount(count+1) // count = 2
//       a = a+1 // 11
//       console.log("inside function ", a) // 11
//  }
//  console.log("outside function",a)

{/* <div>
      <h1> {count} </h1>
      <h2>{a}</h2>
      <button onClick={increaseCount}> Increase </button>

    </div> */}