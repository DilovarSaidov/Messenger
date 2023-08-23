import express from "express";
import MessagesController from "../controller/MessagesController";

const router = express.Router();

router.get("/messages/:receiver-id", MessagesController.getMessages);
router.post("/create-message", MessagesController.createMessage);

export = router;
