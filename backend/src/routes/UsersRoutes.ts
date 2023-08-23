import express from "express";
import UserController from "../controller/UserController";

const router = express.Router();

router.get("/users", UserController.getAllUsers());
router.post("/create-user", UserController.createUser);

export = router;
