const db = require("../db");
import { PoolClient } from "pg";
import { pool } from "../db";
import { User } from "../types";

export class UserModel {
  static async getUsers(): Promise<User[]> {
    const client = await pool.connect();
    const { rows } = await client.query<User>("SELECT * FROM users");
    const users: User[] = rows;
    return users; 
  }

  static async createUser(req: { body: User }): Promise<User> {
    const client: PoolClient = await pool.connect();
    const { firstName, lastName, phoneNumber, password } = req.body;
    const { rows } = await client.query<User>(
      `INSERT INTO users (firstName, lastName, phoneNumber, password) VALUES ($1, $2, $3, $4) RETURNING *`,
      [firstName, lastName, phoneNumber, password]
    );
    return rows[0];
  }
}
