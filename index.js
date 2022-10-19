import express from "express";
import {
  getFriendFromList,
  getFriendsList,
  addFriend,
} from "./controllers/friendsController.js";
import { addMessages, getMessages } from "./controllers/messagesController.js";

const app = express();
const PORT = process.argv.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Response text brotha, take it!");
});

// friends endpoints
// GET all frineds
app.get("/friends", getFriendsList);

// GET Sending friend by id
app.get("/friends/:friendId", getFriendFromList);

// POST add friend to friendList
app.post("/addFriend", addFriend);

// messages endpoints
// GET get all messages
app.get("/messages", getMessages);

// POST add message to messages object
app.post("/messages", addMessages);

// starting server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
