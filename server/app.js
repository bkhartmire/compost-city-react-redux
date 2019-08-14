// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const axios = require("axios");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

//Parse request bodies as json
app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));
// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await db("posts").select();
    res.json(posts);
  } catch (err) {
    res.sendStatus(404);
  }
});

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

app.get("/api/zipcodes/:zipcode/:radius", async (req, res) => {
  try {
    const zipcodes = await axios.get(
      `https://www.zipcodeapi.com/rest/${process.env.API_KEY}/radius.json/${
        req.params.zipcode
      }/${req.params.radius}/mile`
    );
    res.send(zipcodes.data.zip_codes);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

app.post("/api/users", async (req, res) => {
  try {
    await db("users").insert(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    await db("posts").insert(req.body);
    res.send(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);

    res.sendStatus(400);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
