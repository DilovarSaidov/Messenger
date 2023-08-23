const db = require("../db");
import { PoolClient } from "pg";
import { pool } from "../db";
import { Message, User } from "../types";

export class MessagesModel {
  static async getMessages(receiverId: string): Promise<Message[] | null> {
    const client = await pool.connect();
    const { rows } = await client.query<Message>(
      `SELECT * FROM messages WHERE "receiverId" = $1`,
      [receiverId]
    );
    const messages: Message[] = rows;
    return messages;
  }

  static async createMessage(req: { body: Message }): Promise<any> {
    const client: PoolClient = await pool.connect();
    const { text, time } = req.body;
    const newMessage = await client.query<Message>(
      `INSERT INTO messages (text, time) VALUES ($1, $2) RETURNING *`,
      [text, time]
    );
    return newMessage;
  }
}
