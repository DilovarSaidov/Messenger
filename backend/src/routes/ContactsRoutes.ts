import express from "express";
import ContactsController from "../controller/ContactsController";

const router = express.Router();

router.get("/contacts", ContactsController.getAllContacts);

export = router;
