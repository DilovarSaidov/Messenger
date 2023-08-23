import React, { useState } from "react";
import "./ContactList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/Modal";
import { User } from "../../types";

type Props = {
  user: User;
  setSearchQuery: (arg: string) => void;
};

const ContactHeader = ({ setSearchQuery, user }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact-header">
      <div className="contact-header__burger" onClick={handleModalOpen}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="contact-header__search">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      {isModalOpen && <Modal onClose={handleModalClose} user={user} />}
    </div>
  );
};

export default ContactHeader;
