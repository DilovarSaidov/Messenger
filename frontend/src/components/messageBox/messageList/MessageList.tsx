import React, { useState } from "react";
import "./MessageList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Message, User } from "../../../types";

type Props = {
  messages: Message[];
  user: User;
  deleteMessage: (id: number | undefined) => void;
};

const MessageList = ({ messages, user, deleteMessage }: Props) => {
  const handleDeleteMessage = (messageId: number | undefined) => {
    deleteMessage(messageId);
  };

  return (
    <div className="message-list">
      {messages && messages.length > 0 ? (
        messages
          .slice()
          .reverse()
          .map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.senderId === user.id ? "sent" : "received"
              }`}
            >
              <div className="message-show">
                <div className="message-text">{message.text}</div>
                <div className="message-time">{message.time}</div>
              </div>
              {message.senderId === user.id && (
                <div className="message-actions">
                  <button onClick={() => handleDeleteMessage(message.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              )}
            </div>
          ))
      ) : (
        <div className="message-empty">Нет сообщений</div>
      )}
    </div>
  );
};

export default MessageList;
