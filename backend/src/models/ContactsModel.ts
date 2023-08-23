const db = require("../db");
import { pool } from "../db";
import { Contact } from "../types";

export class ContactsModel {
  static async getContacts(): Promise<Contact[]> {
    const client = await pool.connect();
    const { rows } = await client.query<Contact>("SELECT * FROM contacts");
    const contacts: Contact[] = rows;
    return contacts;
  }
}
