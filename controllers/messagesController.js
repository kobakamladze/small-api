import _ from "lodash";
import { messages } from "../models/messagesModel.js";

// get all messages
function getMessages(req, res) {
  res.status(200).json("Albert: :P");
}

// add message
function addMessages(req, res) {
  const {
    body: { name, message },
  } = req;

  if (!name || !message) {
    return res.status(400).json("Something went wrong...");
  }

  messages.push({ name, message, date: Date.now() });
  res.status(200).json(_.last(messages));
}

export { addMessages, getMessages };
