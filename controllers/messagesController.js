// object of messages
const messages = {};

// get all messages
function getMessages(req, res) {
  res.ststus(200).json("Albert: :P");
}

// add message
function addMessages(req, res) {
  const {
    body: { name, message },
  } = req;

  if (name && message) {
    messages[name].message = message;
    messages[name].date = Date.now();
  }

  const addedMessage = messages[name];

  if (!addedMessage) {
    return res.status(400).json("Something went wrong...");
  }

  res.status(200).json(addedMessage);
}

export { addMessages, getMessages };
