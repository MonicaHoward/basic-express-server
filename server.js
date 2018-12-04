// require dependencies
const express = require("express");

// inititalize express app object
const app = express();

// when a request is made respond with message
app.get("/", (req, res) => res.send("Hello, World"));

// inititalize port
const port = process.env.PORT || 5000;

// listen to port
app.listen(port, () => console.log(`Express running on port ${port}`));

// Add mongoose to dependencies

// Add db config

// promise to connect to db
