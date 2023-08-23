import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideo,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { Contact } from "../../types";

type Props = {
  choosenContact: Contact;
};

const Header = ({ choosenContact }: Props) => {
  return (
    <div className="header">
      <div className="header__avatar">
        <img
          src={choosenContact.avatar || "https://i.pravatar.cc/150"}
          alt="avatar"
        />
      </div>
      <div className="header__info">
        <div className="header__name">
          {choosenContact.firstName} {choosenContact.lastName}
        </div>
        <div
          className={`header__status ${
            choosenContact.status === "Online" ? "online" : "offline"
          }`}
        >
          {choosenContact.status}
        </div>
      </div>

      {/* Иконки для Header */}

      <div className="header__actions">
        <button className="header__button">
          <FontAwesomeIcon icon={faPhone} />
        </button>
        <button className="header__button">
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button className="header__button">
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>
      </div>
    </div>
  );
};

export default Header;
