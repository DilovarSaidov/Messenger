import express from "express";
import cors from "cors";
import bodyParser, { json } from "body-parser";
import { pool } from "./db";
import UsersRouters = require("./routes/UsersRoutes");
import ContactsRoutes = require("./routes/ContactsRoutes");
import MessagesRotes = require("./routes/MessagesRouter");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use(UsersRouters);
app.use(ContactsRoutes);
app.use(MessagesRotes);

// Saved user
// app.post("/save-user", (req: express.Request, res: express.Response) => {
//   const user = req.body;
//   localstorage.setItem("user", JSON.stringify(user));
//   res.send("User saved");
// });

// // Send new messages
// app.post("/create-messages", (req: express.Request, res: express.Response) => {
//   const messages: Message[] = JSON.parse(
//     localStorage.getItem("messages") || "[]"
//   );
//   const newMessage = req.body;
//   newMessage.id = messages.length + 1;
//   messages.push(newMessage);
//   localstorage.setItem("messages", JSON.stringify(messages));
//   res.send(newMessage);
// });

// // Delete message
// app.delete("/messages/:id", (req: express.Request, res: express.Response) => {
//   const messages: Message[] = JSON.parse(
//     localstorage.getItem("messages") || "[]"
//   );
//   const messageId: number = parseInt(req.params.id);
//   const messageIndex = messages.findIndex(
//     (message: Message) => message.id === messageId
//   );
//   messages.slice(messageIndex, 1);
//   localstorage.setItem("messages", JSON.stringify(messageIndex));
//   res.send(`Message with id ${messageId} deleted`);
// });

app.listen(port, () => {
  console.log(port);
});
