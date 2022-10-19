import _ from "lodash";
import path, { dirname } from "path";

// __dirname
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import { messages } from "../models/messagesModel.js";

// get all messages
function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "manToWolfExplorer.jpg"));
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
  res.status(201).json(_.last(messages));
}

export { addMessages, getMessages };
