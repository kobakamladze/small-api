import _ from "lodash";
import { friendList } from "../models/friendsModel.js";

function getFriendFromList(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friendList[friendId];

  if (!friend) {
    res.status(404).json({
      error: "Friend was not found.",
    });
  }

  res.json(friend);
}

function getFriendsList(req, res) {
  res.json(friendList);
}

function addFriend(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json("Soemthing went wrong buddyyy");
  }

  friendList.push({ id: friendList.length, name });
  res.status(200).json(_.last(friendList));
}

export { getFriendFromList, getFriendsList, addFriend };
