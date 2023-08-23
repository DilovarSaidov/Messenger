import { ContactsModel } from "../models/ContactsModel";
import { Request, Response } from "express";
import { Contact } from "../types";

export default class ContactsController {
  static getAllContacts() {
    return async (req: Request, res: Response) => {
      try {
        const list: Contact[] = await ContactsModel.getContacts();
        return res.json({ success: true, contacts: list });
      } catch (error) {
        return res.status(500).json({ success: false, eror: error });
      }
    };
  }
}
