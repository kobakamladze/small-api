const express = require("express");

const app = express();

const PORT = process.argv.PORT || 3000;

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

app.get("/", (req, res) => {
  res.send("Response text brotha, take it!");
});

// Sending list of all friends
app.get("/friends", (req, res) => {
  res.json(friendList);
});

// Sending friend by id
app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friendList[friendId];

  if (!friend) {
    res.status(404).json({
      error: "Friend was not found.",
    });
  }

  res.json(friend);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
