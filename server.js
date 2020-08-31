const express = require("express");
const mongoose = require("mongoose");

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//mongodb connection
mongoose
  .connect(db)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello worldd"));

//use routes
app.use('/api/users',users);
app.use('/api/posts',posts);
app.use('/api/profile',profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
