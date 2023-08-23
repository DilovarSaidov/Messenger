import React, { useState } from "react";
import "./MessageInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faSmile,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { Contact, User, Message } from "../../../types";

type Props = {
  user: User;
  choosenContact: Contact;
  handleNewMessage: (message: Message) => void;
};

const MessageInput = ({ user, choosenContact, handleNewMessage }: Props) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    const newMessage = {
      senderId: user.id,
      receiverId: choosenContact.id,
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    fetch("http://localhost:3001/create-messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((response) => response.json())
      .then((data) => {
        handleNewMessage(data);
        setMessage("");
      });
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <div className="message-input-icons">
        <FontAwesomeIcon icon={faSmile} className="icon" />
        <FontAwesomeIcon icon={faPaperclip} className="icon" />
      </div>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <FontAwesomeIcon icon={faMicrophone} className="icon" />
    </form>
  );
};

export default MessageInput;
