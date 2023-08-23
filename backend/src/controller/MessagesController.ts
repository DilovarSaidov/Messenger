import { MessagesModel } from "../models/MessagesModel";
import { Request, Response } from "express";
import { Message } from "../types";

export default class MessagesController {
  static getMessages() {
    return async (req: Request, res: Response) => {
      const receiverId: string = req.params.receiverId;
      try {
        const messagesModel = new MessagesModel();
        const list: Message[] | null = await MessagesModel.getMessages(
          receiverId
        );
        return res.json({ success: true, messages: list });
      } catch (error) {
        return res.status(500).json({ success: true, messages: error });
      }
    };
  }

  static createMessage() {
    return async (req: Request, res: Response) => {
      try {
        const { text, time }: Message = req.body;
        if (!req.body) {
          throw new Error("Error");
        } else {
          const newMessage = MessagesModel.createMessage(req.body);
          res.json(newMessage);
        }
      } catch (error) {}
    };
  }
}
