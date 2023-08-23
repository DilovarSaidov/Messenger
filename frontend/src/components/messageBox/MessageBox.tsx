import React, { useEffect, useState } from "react";
import "./MessageBox.css";
import MessageList from "./messageList/MessageList";
import MessageInput from "./messageIput/MessageInput";
import { Contact, User, Message } from "../../types";

type Props = {
  choosenContact: Contact;
  user: User;
};

const MessageBox = ({ choosenContact, user }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3001/messages/${choosenContact.id}`)
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, [choosenContact]);

  const handleNewMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
  };

  console.log('choo',choosenContact);
  

  const deleteMessage = (messageId: number | undefined) => {
    fetch(`http://localhost:3001/messages/${messageId}`, {
      method: "DELETE",
    }).then(() => {
      const updateMessages = messages.filter(
        (message) => message.id !== messageId
      );
      setMessages(updateMessages);
    });
  };

  return (
    <div className="message-box">
      <MessageList
        messages={messages}
        user={user}
        deleteMessage={deleteMessage}
      />
      <div className="message-input-container">
        <MessageInput
          user={user}
          choosenContact={choosenContact}
          handleNewMessage={handleNewMessage}
        />
      </div>
    </div>
  );
};

export default MessageBox;
