import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Contact } from "../../types";
import "./ContactList.css";

type Props = {
  contacts: Contact[];
  onContactClick: (contact: Contact) => void;
  choosenContact: Contact | undefined;
  searchQuery: string;
};

const ContactBody = ({
  contacts,
  onContactClick,
  choosenContact,
  searchQuery,
}: Props) => {
  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contact-body">
      {filteredContacts.map((contact) => (
        <div
          key={contact.id}
          className={`contact ${
            choosenContact && choosenContact.id === contact.id ? "selected" : ""
          }`}
          onClick={() => onContactClick(contact)}
        >
          <img
            src={contact.avatar || "https://i.pravatar.cc/150"}
            alt="User"
            className="contact-image"
          />
          <div className="contact-details">
            <div className="contact-name">
              {contact.firstName} {contact.lastName}
            </div>
            {choosenContact && choosenContact.id === contact.id && (
              <div className="contact-status">{contact.status}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactBody;
