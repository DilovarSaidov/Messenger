import React, { useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faUser,
  faPhone,
  faGear,
  faMoon,
  faSun,
  faRightToBracket,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { User } from "../../types";

type Props = {
  user: User;
  onClose: () => void;
};

const Modal = ({ onClose, user }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`modal ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="modal__header">
        <div className="modal__close" onClick={onClose}>
          X
        </div>
      </div>
      <div className="modal__body">
        <div className="modal__user">
          <img
            src="https://img.freepik.com/premium-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-594.jpg?w=740"
            alt="User"
          />
          <div className="modal__user-info">
            <div className="modal__user-name">
              {user.firstName} {user.lastName}
            </div>
          </div>
        </div>
        <div className="modal__menu">
          <div className="modal__menu-item">
            <span className="icon__bullhorn">
              <FontAwesomeIcon icon={faBullhorn} />
            </span>
            Create Channel
          </div>
          <div className="modal__menu-item">
            <span className="icon__user__grop">
              <FontAwesomeIcon icon={faUserGroup} className="icon" />
            </span>
            Create Group
          </div>
          <div className="modal__menu-item">
            <span className="icon__user">
              <FontAwesomeIcon icon={faUser} />
            </span>
            Contacts
          </div>
          <div className="modal__menu-item">
            <span className="icon__phone">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            Calls
          </div>
          <div className="modal__menu-item">
            <span className="icon__seting">
              <FontAwesomeIcon icon={faGear} />
            </span>
            Settings
          </div>
          <div className="modal__menu-item" onClick={handleToggleDarkMode}>
            <span className="icon__moon">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </span>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </div>
          <div className="modal__menu-item">
            <span className="icon__exit">
              <FontAwesomeIcon icon={faRightToBracket} />
            </span>{" "}
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
