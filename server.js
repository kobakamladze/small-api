import express from "express";
import { friendsRouter } from "./routes/friendsRouter.js";
import { messagesRouter } from "./routes/messagesRouter.js";

const app = express();
const PORT = process.argv.PORT || 3000;

app.use(express.json());

// diplay request method and url
app.use((req, res, next) => {
  console.log(`${req.method} ${req.baseUrl} ${req.url}`);
  next();
});

// GET main
app.get("/", (req, res) => {
  res.send("Response text brotha, take it!");
});

// Routes
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// starting server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
