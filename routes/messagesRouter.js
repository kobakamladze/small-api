import express from "express";
import { addMessages, getMessages } from "../controllers/messagesController.js";

const messagesRouter = express.Router();

// GET get message
messagesRouter.get("/", getMessages);
// POST add message
messagesRouter.post("/", addMessages);

export { messagesRouter };
