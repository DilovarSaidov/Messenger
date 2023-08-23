import React, { useState } from "react";
import ContactHeader from "./ContactHeader";
import ContactBody from "./ContactBody";
import { Contact, User } from "../../types";

type Props = {
  contacts: Contact[];
  onContactClick: (contact: Contact) => void;
  choosenContact: Contact | undefined;
  user: User;
};

const ContactList = ({
  contacts,
  onContactClick,
  choosenContact,
  user,
}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="contac__List">
      <div>
        <ContactHeader setSearchQuery={setSearchQuery} user={user} />
        <ContactBody
          contacts={contacts}
          onContactClick={onContactClick}
          choosenContact={choosenContact}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default ContactList;
