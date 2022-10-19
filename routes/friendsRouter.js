import express from "express";

import {
  getFriendFromList,
  getFriendsList,
  addFriend,
} from "../controllers/friendsController.js";

// friends endpoints
const friendsRouter = express.Router();

// GET get all friends
friendsRouter.get("/", getFriendsList);

//GET friend by id
friendsRouter.get("/:friendId", getFriendFromList);

// POST add friend to frinds list
friendsRouter.post("/", addFriend);

export { friendsRouter };
