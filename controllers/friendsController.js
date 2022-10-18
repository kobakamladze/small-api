const friendList = [
  {
    id: 0,
    name: "Sir Isaac Newton",
  },
  {
    id: 0,
    name: "Albert Einstein",
  },
];

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

export { getFriendFromList, getFriendsList };
