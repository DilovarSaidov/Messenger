import { UserModel } from "../models/UserModel";
import { Request, Response } from "express";
import { User } from "../types";

export default class UserController {
  static getAllUsers() {
    return async (req: Request, res: Response) => {
      try {
        const list: User[] = await UserModel.getUsers();
        return res.json({ success: true, users: list });
      } catch (error) {
        return res.status(500).json({ success: false, error: error });
      }
    };
  }

  static createUser() {
    return async (req: Request, res: Response) => {
      try {
        const { firstName, lastName, phoneNumber, password }: User = req.body;
        if (!req.body) {
          throw new Error("Error");
        } else {
          const user = await UserModel.createUser(req.body);
          return res.json(user);
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    };
  }
}
