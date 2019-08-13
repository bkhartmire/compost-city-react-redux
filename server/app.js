// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/users/:email", async (req, res) => {
  try {
    const user = await db("users")
      .select("username", "email", "password")
      .where({ email: req.params.email });
    res.json(user);
  } catch (err) {
    res.sendStatus(404);
  }
});

app.post("/api/users", async (req, res) => {
  await db("users").insert(req.body);
  res.sendStatus(200);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
