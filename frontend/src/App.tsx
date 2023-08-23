import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/contactList/ContactList";
import Header from "./components/header/Header";
import LoginPage from "./components/loginPage/LoginPage";
import MessageBox from "./components/messageBox/MessageBox";
import { User, Contact } from "./types";

const App = () => {
  const [user, setUser] = useState<User>();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [choosenContact, setChoosenContact] = useState<Contact | undefined>();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((userFromServer: User) => {
        setUser(userFromServer);
      });

    fetch("http://localhost:3001/contacts")
      .then((response) => response.json())
      .then((contacts: Contact[]) => {
        setContacts(contacts);
      });
  }, []);

  const onContactClick = (contact: Contact): void => {
    setChoosenContact(contact);
  };

  return (
    <div className="app">
      {user ? (
        <>
          <ContactList
            contacts={contacts}
            onContactClick={onContactClick}
            choosenContact={choosenContact}
            user={user}
          />
          {choosenContact ? (
            <div className="app__message">
              <Header choosenContact={choosenContact} />
              <MessageBox user={user} choosenContact={choosenContact} />
            </div>
          ) : (
            <div className="app__empty">
              <span>Выберите кому хотели бы написать</span>
            </div>
          )}
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default App;
