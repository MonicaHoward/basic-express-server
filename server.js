// require dependencies
// Add mongoose to dependencies
const express = require("express");
const mongoose = require("mongoose");

// inititalize express app object
const app = express();

// Add db config file
const db = require("./config/keys").mongoURI;

// promise to connect to db
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// when a request is made respond with message
app.get("/", (req, res) => res.send("Hello, World"));

// inititalize port
const port = process.env.PORT || 5000;

// listen to port
app.listen(port, () => console.log(`Express running on port ${port}`));
